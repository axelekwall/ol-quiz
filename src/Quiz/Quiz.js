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
    //this.showAnswer = this.showAnswer.bind(this);
  }

  // Arrow-funktion, behöver inte binda this
  nextQuestion = (e) => {
    //OM DET FINNS FLER FRÅGOR 
    if(this.props.questions.length >= (this.props.currentQuestion+2)){
      //ACTION - NÄSTA FRÅGA 
      this.props.onClickNext()
    } else {
      // SHOW FINISHED VIEW
      this.props.onFinishQuiz()
      //this.setState({currentView: "UI_SHOW_SUMMARY"});
    }
  }

  render() {
    var content;
    var progressContent;
    // Visar komponent/view beroende av statet i state-trädet
    switch(this.props.currentView){
      case UI.FRONT:
        content = <FrontView 
                    quiz={this.props.quiz} 
                    onClick={this.props.onClickStart}
                    onClickFetch={this.props.onClickFetch("studentrights")}
                  />
        break;
      case UI.QUESTION:
        progressContent = <Progress 
                            progressCount={this.props.currentQuestion+1} 
                            progressLength={this.props.quiz.numberOfQuestions}
                          />
        content = <Question 
                    question={this.props.questions[this.props.currentQuestion]} 
                    onClickAnswer={this.props.onClickAnswer}
                    img={this.props.questions[this.props.currentQuestion] ? this.props.questions[this.props.currentQuestion] : null }
                  />
        break;
      case UI.ANSWER: 
        progressContent = <Progress 
                            progressCount={this.props.currentQuestion+1} 
                            progressLength={this.props.quiz.numberOfQuestions}
                          />
        content = <Answer 
                    question={this.props.questions[this.props.currentQuestion]} 
                    onClick={this.nextQuestion} 
                    selectedAnswer = {this.props.selectedAnswer}
                    correct = {this.props.questions[this.props.currentQuestion].ans[this.props.questions[this.props.currentQuestion].correctIndex]}
                  />
        break;
      case UI.SUMMARY: 
        content = <Finished 
                    correctAnswers={this.props.correctAnswers} 
                    numberOfQuestions={this.props.quiz.numberOfQuestions} 
                    number={0}
                  />
        break;
      default:
        content = <FrontView 
                    quiz={this.props.quiz} 
                    onClick={this.props.onClickStart}
                  />
        break;
    }

  	return(
  		<div>
        {progressContent}
        {content}
      </div>
  	)
  }
}

export default Quiz;



