import React, {Component} from 'react';
import Progress from "./Progress.js";
import Question from "./Question.js";
import Answer from "./Answer.js";
import Controls from "./Controls.js";

class Quiz extends Component {
   
   constructor(props) {
      super(props);
      this.state = {
          quiz: {
                name: "Studenträtt",
                desc: "Ett quiz om studenträtt",
                numberOfQuestion: 2
          },
          currentView: "UI_SHOW_FRONT",
          currentQuestion: 0,
          questions: [{text: "Du bryter armen dagen innan algebratentan. Du kuggar eftersom att du inte kan skriva och tappar ditt csn. Vad kan du göra?",
                        ans: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean.", 
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean.", 
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean."],
                        ansText: "Answer text here",
                        correctIndex: 1},
                      {text: "Fråga 2",
                      ans: ["Ja2", "Nej2", "Kanske2", "Hej2"],
                      ansText: "Answer text 2 here",
                      correctIndex: 2}],
          selectedAnswer: 0,
          correctAnswers: 0          
        };

      //Bind functions
      this.increaseQuestion = this.increaseQuestion.bind(this);
      this.showAnswer = this.showAnswer.bind(this);
   }

   nextQuestion(e){
    //OM DET FINNS FLER FRÅGOR 
    if(this.props.questions.length > this.props.currentQuestion){
      //ACTION - NÄSTA FRÅGA 
      this.props.onClickNext()
      //this.setState({currentQuestion: this.state.currentQuestion+1}); //Så länge

      //ACTION - SHOW QUESTION VIEW
      //this.setState({currentView: "UI_SHOW_QUESTION"}); //Så länge
    }
    else{
      // SHOW FINISHED VIEW
      this.props.onFinishQuiz()
      //this.setState({currentView: "UI_SHOW_SUMMARY"});
    }
    

   }


   showAnswer(e){

        //SET SELECTED ANSWER
        this.setState({selectedAnswer: })

        //ACTION SHOW ANSWER
        this.setState({currentView: "UI_SHOW_ANSWER"});    
   }


  render() {
    var content;

    // Visar komponent/view beroende av statet i state-trädet
    switch(this.props.currentView){
      case 'UI_SHOW_FRONT':{
        content = <FrontView quiz={this.props.quiz}/>
      }
      case 'UI_SHOW_QUESTION':{
        content = <Question question={this.props.questions[this.props.currentQuestion]} answerQuestion={this.props.answerQuestion}
      }
      case 'UI_SHOW_ANSWER': {
        content = <Answer question={this.props.questions[this.props.currentQuestion]} onClick={this.props.nextQuestion} selectedAnswer = {this.props.selectedAnswer} onCorrectAnswer={this.props.onCorrectAnswer}/>
      }
      case 'UI_SHOW_SUMMARY': {
        content = <Finished correctAnswers={this.props.correctAnswers} numberOfQuestions={this.props.numberOfQuestions}/>
      }
    }


  	return(
  		<div>
        <Progress progressCount={this.state.currentQuestion}/>
        
        {content}

      </div>
  	)
  }
}

export default Quiz;



