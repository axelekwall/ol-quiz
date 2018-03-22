import React, {Component} from 'react';
import Transition from 'react-motion-ui-pack';
import LoadingView from './LoadingView.js';


//Component includes 
//* name of quiz
//* description text
//* start button 

//When clicking start user start quiz and is being directed to first question view

// 
// const styles = {
//   slideInLeft: {
//     animation: 'x 1s',
//     animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
//   },
//   fadeIn: {
//     animation: 'x 4s',
//     animationName: Radium.keyframes(fadeIn, 'fadeIn')
//   }
// }

// const SlowerSlideInStyle = {
//   slideInLeft: {
//     animation: 'x 1.5s',
//     animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
//   }
// }


class FrontView extends Component {  
  render() {
    var loaded =         
      <Transition
        enter={{ opacity: 1, translateX: 0 }}
        leave={{ opacity: 0, translateX: -100 }}
        component={false}
      >
        <div className="front-view-content" key="trans">
          <h1>{this.props.quiz.name}</h1>
          <p>
            {this.props.quiz.desc}
          </p>
          <button className="start-button"onClick={e => {this.props.onClick()}}>Starta quiz</button>
        </div>
      </Transition>;


    return(
      <div className="front-view-container">
        {this.props.quiz.isFetchingQuiz ? <LoadingView/> : loaded }
      </div>
    );
  } 
}


export default FrontView;
