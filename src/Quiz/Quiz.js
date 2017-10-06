import React, {Component} from 'react';
import Progress from "./Progress.js";
import Question from "./Question.js";
import Visualization from "./Visualization.js";
import Controls from "./Controls.js";

class Quiz extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
         questions: ["Fråga 1", "Fråga 2"],
         questionNumber: 0
      };
      this.increaseQuestion = this.increaseQuestion.bind(this);
   }

   increaseQuestion(e){
   	console.log(e.target.value) //Sparar svar
   	if (e.target.value === "ja" && this.state.questions.length > this.state.questionNumber){
   		this.setState({questionNumber: this.state.questionNumber+1});
   	}
   	
   	console.log(this.state)
   }


  render() {
  	return(
  		<div>
  			<Progress progressCount={this.state.questionNumber}/>
  			<Question actionME={this.increaseQuestion} questions={this.state.questions} questionNumber={this.state.questionNumber}/>
  			<Visualization/>
  			<Controls/>
		</div>
  	)
  }
}

export default Quiz;
