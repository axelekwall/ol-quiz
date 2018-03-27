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
          <img id="jsv-logga-bild" src="./static/logga-jsv.jpg"/>
          <h1>{this.props.quiz.name}</h1>
          <p>
            Welcome to this supercalifragilisticexpialidocious quiz made by Jämställdhetsveckan in 
            collaboration with Osqledaren! 
            <br/><br/>
            Answer some quick questions and find out which feminist 
            (or non-feminist) profile you are most similar to.But beware, we do not guarantee your 
            satisfaction with the result...
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
