import React, {Component} from 'react';


const Finished = ({correctAnswers, numberOfQuestions}) => (
  <div>
    <h1>Great job!</h1>
    <h2>{correctAnswers}/{numberOfQuestions} correct answers!</h2>
  </div>
)

export default Finished;
