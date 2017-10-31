import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';

//Component includes 
//* name of quiz
//* description text
//* start button 

//When clicking start user start quiz and is being directed to first question view

const FrontView = ({quiz, onClick}) => (
  <div className="front-view-container">
	    <h1>{quiz.name}
	    	<strong>{quiz.desc}</strong>
    	</h1>

      <Motion defaultStyle={{margin:80, opacity:0}} style={{margin: spring(0, {stiffness:50, damping:20}), opacity: spring(1, {stiffness: 180, damping: 100})}}>
  		{interpolatingStyle => <div style={interpolatingStyle}>
    		<button className="start-button"onClick={e => {onClick()}}>Start</button>
   		</div>}
	</Motion>


  </div>
)


export default FrontView;
