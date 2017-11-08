const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
// const quiz = require('./quiz-data.js');

// Init Firebase Admin
admin.initializeApp(functions.config().firebase);

// Create Express app
const app = express();
const router = express.Router();

// Setup Firestore references

// Endpoints
// Post answer to one question
router.post('/answer', (req, res) => {
  res.send('Hi from API!');
});

// Get result for one question
router.get('/result/question/:questionId', (req, res) => {
  const questionId = req.params['questionId'];
});

// Get quiz
router.get('/quiz/:name', (req, res) => {
  res.send('Hej');
});

router.get('/', (req, res) => {
  res.send('Hej');
});

// Get tota result fr one quiz
router.get('/result/quiz/:quiz', (req, res) => {
  res.send('Hej');
});

app.use('/api', router);
exports.api = functions.https.onRequest(app);
