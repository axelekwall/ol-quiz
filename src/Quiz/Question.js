import React, {Component} from 'react';

import { bounceInRight } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

// Component includes 
	//* Question text
	//* Answer options

//When clicking on an answer button: 
	//function onClickAnswer() is triggered - this function is in showQuiz.js 
	//It triggers ACTION 'answerQuestion' found in '/actions/index.js'

//Style för animation
const styles = {
  bounceInRight: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounceInRight, 'bounceInRight')
  }
}

class Question extends Component {

	
  render() {
  	return(
  		<StyleRoot>
	    <div style={styles.bounceInRight}>
	    	<div className="display-question">
	    		<h2>{this.props.question.text}</h2>
    		</div>
	  		<div className={"answerbuttons answer-options"+this.props.question.ans.length}>
	  			{this.props.question.ans.map((answer, index) => (
				    <button id={"ans" + index} value={index} key={index} onClick={() => {this.props.onClickAnswer(index,this.props.question.correctIndex)}}>{answer}</button>
	  			))}
			</div>
		</div>
		</StyleRoot>
  	)
  }
}
export default Question;
