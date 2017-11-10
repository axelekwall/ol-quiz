const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

// Init Firebase Admin
admin.initializeApp(functions.config().firebase);

// Create Express app
const app = express();

// Setup Firestore references
const db = admin.firestore();

// Router setup
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

// Post results
router.post('/result/quiz/:name', (req, res) => {
  const quizName = req.params['name'];
  const result = req.body;
  const quizRef = db.collection('quiz').doc(quizName);
  const transaction = db.runTransaction((t) => {
    return t.get(quizRef)
    .then((quiz) => {
      const newTotal = quiz.data().totalAns + 1;
      t.update(quizRef, {totalAns: newTotal});
      return Promise.resolve(newTotal);
    });
  }).then((newTotal) => {
    const transactions = [];
    req.body.answersArray.forEach((answer) => {
      transactions.push(
        db.runTransaction((t) => {
          const questionRef = quizRef.collection('questions').doc(answer.id);
          return t.get(questionRef)
          .then((question) => {
            const currentPercentage = question.data().correctStat;
            const value = (currentPercentage / 100) * (newTotal - 1);
            const newStat = (answer.correct)
              ? (value + 1) / newTotal
              : value / newTotal;
            t.update(questionRef, {correctStat: Math.round(newStat * 100)});
          });
        })
      );
    });
    Promise.all(transactions)
    .then(() => {
      quizRef.collection('results').add({correctAns: result.correctAnswers});
      res.status(200).send('OK');
    });
  })
  .catch((error) => {
    res.status(500).send('Error: ' + error);
  });
});

// Get quiz data
router.get('/quiz/:name', (req, res) => {
  const quizName = req.params['name'];
  const result = {};
  const queries = [
    db.collection('quiz').doc(quizName).get(),
    db.collection('quiz').doc(quizName).collection('questions').get(),
  ];

  Promise.all(queries)
  .then((data) => {
    const quiz = data[0];
    const questions = data[1];
    const quizData = quiz.data();
    result.id = quiz.id;
    result.name = quizData.name;
    result.desc = quizData.description;
    result.numberOfQuestions = questions.size;
    result.questions = [];
    questions.forEach((question) => {
      result.questions.push({id: question.id, data: question.data()});
    });
    res.send(result);
  })
  .catch((error) => {
    res.status(503).send(error);
  });
});

// Tell app about router...
app.use('/api', router);

// Export Express app as function "api"
exports.api = functions.https.onRequest(app);
