import React, {Component} from 'react';


const FrontView = ({quiz, onClick}) => (
  <div>
    <h1>{quiz.name}</h1>
    <h2>{quiz.desc}</h2>
    <button onClick={e => {onClick()}}>Start</button>
  </div>
)


export default FrontView;
