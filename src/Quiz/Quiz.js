import React, {Component} from 'react';
import Progress from "./Progress.js";
import Question from "./Question.js";
import Answer from "./Answer.js";
import Finished from "./Finished.js";
import FrontView from "./FrontView.js";
import {UI} from "../actions"

class Quiz extends Component {

  componentWillMount(){
    // FETCH STUDENT RIGHTS QUIZ
    // SHOULD BE IN THE ROUTER IN FUTURE, AND PROBABLY NOT HERE
  //  this.props.onClickFetch("studentrights");
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
                    onClickFetch={this.props.onClickFetch}
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
                    img={this.props.questions[this.props.currentQuestion].data.img ? this.props.questions[this.props.currentQuestion].data.img : null }
                    questions = {this.props.questions}
                    onFinishQuiz = {this.props.onFinishQuiz} 
                  />
        break;
      case UI.ANSWER: 
        progressContent = <Progress 
                            progressCount={this.props.currentQuestion+1} 
                            progressLength={this.props.quiz.numberOfQuestions}
                          />
        // content = <Answer 
        //             question={this.props.questions[this.props.currentQuestion].data} 
        //             onClick={this.nextQuestion} 
        //             selectedAnswer = {this.props.selectedAnswer}
        //           />
        break;
      case UI.SUMMARY: 
        content = <Finished 
                    numberOfQuestions={this.props.quiz.numberOfQuestions} 
                    number={0}
                    id = {this.props.quiz.id}
                    userScore = {this.props.userScore}
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



