import React, {Component} from 'react';
import Progress from "./Progress.js";
import Question from "./Question.js";
import Answer from "./Answer.js";
import Controls from "./Controls.js";

class Quiz extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
         questions: [{text: "Du bryter armen dagen innan algebratentan. Du kuggar eftersom att du inte kan skriva och tappar ditt csn. Vad kan du göra?",
                     answer: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean.", 
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean.", 
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean."],
                     correctIndex: 1
                    },
                     {text: "Fråga 2",
                      answer: ["Ja2", "Nej2", "Kanske2", "Hej2"],
                      correctIndex: 2
                    }],
         questionNumber: 0,
      };
      this.increaseQuestion = this.increaseQuestion.bind(this);
   }

   increaseQuestion(e){
   	console.log(e.target.value) //Sparar svar
   	if (e.target.value == this.state.questions[this.state.questionNumber].correctIndex && this.state.questions.length > this.state.questionNumber){
   		this.setState({questionNumber: this.state.questionNumber+1});
   	}
   	
   	console.log(this.state)
   }


  render() {
  	return(
  		<div>
        <Progress progressCount={this.state.questionNumber}/>
  			<Question actionME={this.increaseQuestion} question={this.state.questions[this.state.questionNumber]} />
		    <Answer/>
      </div>
  	)
  }
}

export default Quiz;



