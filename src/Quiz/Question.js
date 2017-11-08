import React, {Component} from 'react';

import Transition from 'react-motion-ui-pack';
import { bounceInRight } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

// Component includes 
	//* Question text
	//* Answer options

//When clicking on an answer button: 
	//function onClickAnswer() is triggered - this function is in showQuiz.js 
	//It triggers ACTION 'answerQuestion' found in '/actions/index.js'

//Style för animation
class Question extends Component {

	
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
							{this.props.question.text}
							<br/>
							<center><img src={this.props.question.img}/></center>
						</h2>
						
					</div>
					<div className={"answerbuttons answer-options"+this.props.question.ans.length}>
						{this.props.question.ans.map((answer, index) => (
							<button id={"ans" + index} value={index} key={index} onClick={() => {this.props.onClickAnswer(index,this.props.question.correctIndex)}}>{answer}</button>
						))}
				</div>
			</div>

		</Transition>
  	)
  }
}
export default Question;
