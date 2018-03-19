// DENNA ANVÄNDS INTE ALLS

import React, {Component} from 'react';

import { tada, shake } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

//Style för animation
//Välj animationer här och byt ut: http://react-animations.herokuapp.com/
const styles = {
  tada: {
    animation: 'x 1s',
    animationName: Radium.keyframes(tada, 'tada')
  },
  shake: {
    animation: 'x 1s',
    animationName: Radium.keyframes(shake, 'shake')
  }
}



class Answer extends Component {
  constructor(props){
    super(props);
    this.percent = this.props.question.correctStat;
    this.correctAnswer = this.findCorrect();
  }

  // Loops alternatives and returns the correct answer text
  findCorrect = () => {
    for(var alt of this.props.question.alternatives){
      if(alt.isCorrect){
        return alt.text;
      }
    }
  }

  
  // Render
  render() {
    var result;
    var styleAnimation;

    if(this.props.selectedAnswer){
      result = "Rätt"
      styleAnimation = styles.tada
      // ACTION - Set correct answer - dispatch
    }
    else{
      result = "Fel"
      styleAnimation = styles.shake
    }

    const headingStyle = {
      fontSize: '1.3rem'
    }
  	return(
  			<div className="answer-content">
          <StyleRoot>
            <div className="answer-text" style={styleAnimation}>
                <h1>{result}</h1>
            </div>
          </StyleRoot>
          
          <div className="answer-statistics">
              <h3>{this.percent}%</h3>
              <h4>har svarat rätt på den här frågan.</h4>
          </div>
          
          <div className="answer-statistics-text">
          </div>

          <div className="answer-info">
              <h3 style={headingStyle}>
                Rätt svar:<br/>
                {this.correctAnswer}
              </h3>
              <p>{this.props.question.answerText}</p>
          </div>
          <div className="next-button-div">
              <center><button type="button" className="next-question-button" onClick={this.props.onClick}>Nästa</button></center>
          </div>
			</div>
      
  	)
  }
}

export default Answer;
