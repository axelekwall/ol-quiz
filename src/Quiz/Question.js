import React, {Component} from 'react';
import Transition from 'react-motion-ui-pack';

// Component includes 
	//* Question text
	//* Answer options

//When clicking on an answer button: 
	//function onClickAnswer() is triggered - this function is in showQuiz.js 
	//It triggers ACTION 'answerQuestion' found in '/actions/index.js'

//Style för animation
class Question extends Component {
  constructor(props){
    super(props);
    this.answer = this.answer.bind(this);
  }

	answer (score, id) {
		console.log("IN FUNCTION")
		if(this.props.questions[this.props.questions.length-1] == this.props.question){
			this.props.onFinishQuiz()
		}else{
			this.props.onClickAnswer(score, id)
		}

	}
	
  render() {
  	return(
			<Transition
				enter={{ opacity: 1, translateY: 0 }}
				leave={{ opacity: 0, translateY: 100 }}
				component={false}
			>

				<div key="trans">
					<div className="display-question">
						<h2>
							{this.props.question.data.text}
							<br/>
							<center><img src={this.props.question.data.img} alt=''/></center>
						</h2>
						
					</div>
					<div className={"answerbuttons answer-options"+this.props.question.data.alternatives.length}>
						{this.props.question.data.alternatives.map((answer, index) => (
							<button id={"ans" + index} value={index} key={index} onClick={() => {this.answer(answer.score, this.props.question.id)}}>{answer.text}</button>
						))}
					</div>
				</div>

		</Transition>
  	)
  }
}
export default Question;
