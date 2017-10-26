import React, {Component} from 'react';


//Component includes 
//* name of quiz
//* description text
//* start button 

//When clicking start user start quiz and is being directed to first question view

const FrontView = ({quiz, onClick}) => (
  <div>
    <h1>{quiz.name}</h1>
    <h2>{quiz.desc}</h2>
    <button onClick={e => {onClick()}}>Start</button>
  </div>
)


export default FrontView;
