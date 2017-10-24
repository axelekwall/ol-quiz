import React, {Component} from 'react';


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
