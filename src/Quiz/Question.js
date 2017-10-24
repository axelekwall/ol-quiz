import React, {Component} from 'react';


const Question = ({question, onClick}) => (
	<div>
		<div className="display-question">
			<h2>{this.props.question.text}</h2>
		</div>
		<div className={"answer-options"+this.props.question.answers.length}>
			{this.props.question.answers.map((answer, index) => (
				<button id={"ans" + index} value={index} onClick={this.props.onClick}>{answer}</button>
			))}
		</div>
	</div>
)

export default Question;
