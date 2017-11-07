const functions = require('firebase-functions');
const express = require('express');
const admin = require('firebase-admin');
const quiz = require('./quiz-data.js');

// Init Firebase Admin
admin.initializeApp(functions.config().firebase);

// Create Express app
const app = express();

// Setup Firestore references

// Endpoints
// Post answer to one question
app.post('/api/answer', (req, res) => {
  res.send('Hi from API!');
});

// Get result for one question
app.get('/api/result/question/:questionId', (req, res) => {
  const questionId = req.params['questionId'];
});

// Get quiz
app.get('/api/quiz/:name', (req, res) => {
  res.send('Hej');
});

// Get tota result fr one quiz
app.get('/api/result/quiz/:quiz', (req, res) => {
  res.send('Hej');
});

exports.app = functions.https.onRequest(app);
