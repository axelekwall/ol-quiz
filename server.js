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
app.post('/api/answer', (req, res) => {
  res.send('Hi from API!');
});

app.get('/api/result/question/:questionid', (req, res) => {
  const questionId = req.params['questionid'];
  res.send(questionId);
});

app.get('/api/quiz/:name', (req, res) => {
  res.send('Hej');
});

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
