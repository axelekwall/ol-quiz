import React, {Component} from 'react';
import Progress from "./Progress.js";
import Question from "./Question.js";
import Answer from "./Answer.js";
import Controls from "./Controls.js";
import Finished from "./Finished.js";
import FrontView from "./FrontView.js";
import {UI} from "../actions"

class Quiz extends Component {
  
  constructor(props) {
    super(props);
    //Bind functions
    this.nextQuestion = this.nextQuestion.bind(this);
    //this.showAnswer = this.showAnswer.bind(this);
  }

  nextQuestion(e){
    //OM DET FINNS FLER FRÅGOR 
    if(this.props.questions.length >= (this.props.currentQuestion+2)){
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


  render() {
    var content;
    // Visar komponent/view beroende av statet i state-trädet
    switch(this.props.currentView){
      case UI.FRONT:
        content = <FrontView quiz={this.props.quiz} onClick={this.props.onClickStart}/>
        break;
      case UI.QUESTION:
        content = <Question question={this.props.questions[this.props.currentQuestion]} onClickAnswer={this.props.onClickAnswer}/>
        break;
      case UI.ANSWER: 
        content = <Answer question={this.props.questions[this.props.currentQuestion]} onClick={this.nextQuestion} selectedAnswer = {this.props.selectedAnswer}/>
        break;
      case UI.SUMMARY: 
        content = <Finished correctAnswers={this.props.correctAnswers} numberOfQuestions={this.props.quiz.numberOfQuestions}/>
        break;
      default:
        content = <FrontView quiz={this.props.quiz} onClick={this.props.onClickStart}/>
        break;
    }

  	return(
  		<div>
        <Progress progressCount={this.props.currentQuestion+1} progressLength={this.props.quiz.numberOfQuestions}/>
        {content}
      </div>
  	)
  }
}

export default Quiz;



