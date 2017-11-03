require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./server/models/index');

// Express setup
const app = express();
app.set('port', process.env.PORT || 3001);

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Database
db.sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch((err) => {
  console.error('Unable to connect to the database:', err);
});

// Endpoints

// Post answer to one question
app.post('/api/answer', (req, res) => {
  res.send('Hi from API!');
});

// Get result for one question
app.get('/api/result/question/:questionId', (req, res) => {
  const questionId = req.params['questionId'];
  db['Answer'].findAll({
    where: {
      QuestionId: questionId,
    },
  })
  .then((answers) => {
    if (!answers.length) {
      res.send(JSON.stringify({value: 0}));
    } else {
      const totalAns = answers.length;
      let correctAns = 0;
      answers.forEach((ans) => {
        if (ans.isCorrect = true) {
          correctAns++;
        }
      });
      const percentageCorrect = Math.round((correctAns/totalAns) * 100);
      res.send(JSON.stringify({value: percentageCorrect}));
    }
  });
});

// Get quiz
app.get('/api/quiz/:name', (req, res) => {
  res.send('Hej');
});

// Get tota result fr one quiz
app.get('/api/result/quiz/:quiz', (req, res) => {
  res.send('Hej');
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
