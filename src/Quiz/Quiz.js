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
         isQuestion: true
      };
      this.increaseQuestion = this.increaseQuestion.bind(this);
      this.showAnswer = this.showAnswer.bind(this);
   }

   increaseQuestion(e){
    console.log("HÄR NU")
   	console.log(e.target.value) //Sparar svar
   	this.setState({questionNumber: this.state.questionNumber+1});
     this.setState({isQuestion: true});
   	console.log(this.state)
   }


   showAnswer(e){
    console.log("in show answer")
    if (e.target.value == this.state.questions[this.state.questionNumber].correctIndex && this.state.questions.length > this.state.questionNumber){
      this.setState({isQuestion: false});
    }
   }

  render() {
    var content;

    //Hämta från state/props sen. True visar fråga, false visar svar
    
    
    if(this.state.isQuestion){
      content = <Question actionME={this.showAnswer} question={this.state.questions[this.state.questionNumber]}/>;
    }
    else{
      content = <Answer actionME={this.increaseQuestion}/>;
    }
  	return(
  		<div>
        <Progress progressCount={this.state.questionNumber}/>
        
        {content}

      </div>
  	)
  }
}

export default Quiz;



