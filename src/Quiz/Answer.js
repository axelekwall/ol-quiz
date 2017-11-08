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
    super(props)
    //DATABASKNAS: HÄR SKA VI STOPPA IN HUR MÅNGA PROCENT SOM SVARAT RÄTT PÅ FRÅGAN
    this.percent = 75;
  }

  render() {
    var result;
    var styleAnimation;

    if(this.props.selectedAnswer === this.props.question.correctIndex){
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
                </div>
                
                <div className="answer-statistics-text">
                    <h4>har svarat rätt på den här frågan.</h4>
                </div>
                <div className="answer-info">
                    <h3 style={headingStyle}>Svaret är:</h3>
                    <h2>{this.props.correct}</h2>
                    <p>{this.props.question.ansText}</p>
                </div>
                <div className="next-button-div">
                    <button type="button" className="next-question-button" onClick={this.props.onClick}>Nästa</button>
                </div>
			</div>
      
  	)
  }
}

export default Answer;
