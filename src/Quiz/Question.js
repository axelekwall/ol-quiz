import React, {Component} from 'react';


class Question extends Component {



  render() {
  	return(
        <div className="display-question"><h2>{this.props.question.text}</h2></div>
	  		<div className={"answer-options"+this.props.question.answer.length}>
	  			{this.props.question.answer.map((answer, index) => (
	  				<button id={"ans" + index} value={index} onClick={this.props.actionME}>{answer}</button>
	  				))}
  			</div>
  		</div>
  	)
  }
}

export default Question;
