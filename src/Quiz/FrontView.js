import React, {Component} from 'react';

import { slideInLeft, fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';


//Component includes 
//* name of quiz
//* description text
//* start button 

//When clicking start user start quiz and is being directed to first question view

// 
const styles = {
  slideInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  },
  fadeIn: {
    animation: 'x 4s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const SlowerSlideInStyle = {
  slideInLeft: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  }
}

const FrontView = ({quiz, onClick}) => (
  <div className="front-view-container">
	 <div className="front-view-content">
      <StyleRoot>
      <h1 style={styles.slideInLeft}>{quiz.name}</h1>
      </StyleRoot>
      <StyleRoot>
	    	<p style={SlowerSlideInStyle.slideInLeft}>{quiz.desc}
        <br/>
        <br/>
        Ta Osqledarens quiz och testa dina kunskaper!</p>
      </StyleRoot>
      <StyleRoot>
        <button style={styles.fadeIn} className="start-button"onClick={e => {onClick()}}>Starta quiz</button>
        </StyleRoot>
     </div>
  </div>
)


export default FrontView;
