import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';

//Component includes 
//* name of quiz
//* description text
//* start button 

//When clicking start user start quiz and is being directed to first question view

const FrontView = ({quiz, onClick}) => (
  <div className="front-view-container">
	 <div className="front-view-content">
      <h1>{quiz.name}</h1>
	    	<p>{quiz.desc}
        <br/>
        <br/>
        Ta Osqledarens quiz och testa dina kunskaper!</p>
        <button className="start-button"onClick={e => {onClick()}}>Starta quiz</button>
     </div>
  </div>
)


export default FrontView;
