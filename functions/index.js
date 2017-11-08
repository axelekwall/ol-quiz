const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');

// Init Firebase Admin
admin.initializeApp(functions.config().firebase);

// Create Express app
const app = express();

// Setup Firestore references
const db = admin.firestore();

// Router setup
const router = express.Router();

// Post answer to one question
router.post('/result', (req, res) => {
  res.send('Hi from API!');
});

// Get result for one question
router.get('/result/question/:id', (req, res) => {
  const questionId = req.params['id'];
});

// Get quiz
router.get('/quiz/:name', (req, res) => {
  const quizName = req.params['name'];
  let result = {};
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

// Get tota result fr one quiz
router.get('/result/quiz/:id', (req, res) => {
  res.send('Hej');
});

// Tell app about router...
app.use('/api', router);

// Export Express app as function "api"
exports.api = functions.https.onRequest(app);
