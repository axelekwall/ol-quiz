import React, {Component} from 'react';

// Component includes 
	//* Question text
	//* Answer options

//When clicking on an answer button: 
	//function onClickAnswer() is triggered - this function is in showQuiz.js 
	//It triggers ACTION 'answerQuestion' found in '/actions/index.js'

class Question extends Component {
  render() {
  	return(
	    <div>
	    	<div className="display-question">
	    		<h2>{this.props.question.text}</h2>
    		</div>
	  		<div className={"answer-options"+this.props.question.ans.length}>
	  			{this.props.question.ans.map((answer, index) => (
				    <button id={"ans" + index} value={index} key={index} onClick={() => {this.props.onClickAnswer(index,this.props.question.correctIndex)}}>{answer}</button>
	  			))}
			</div>
		</div>
  	)
  }
}
export default Question;
