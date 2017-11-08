import React, {Component} from 'react';


import Transition from 'react-motion-ui-pack';


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


const FrontView = ({quiz, onClick}) => (
    <div className="front-view-container">
        <Transition
          enter={{ opacity: 1, translateX: 0 }}
          leave={{ opacity: 0, translateX: -100 }}
          component={false}
        >
        <div className="front-view-content" key="trans">
          <h1>{quiz.name}</h1>
          <p>
            {quiz.desc}
            <br/>
            <br/>
            Ta Osqledarens quiz och testa dina kunskaper!
          </p>
          <button className="start-button"onClick={e => {onClick()}}>Starta quiz</button>
          <button className="start-button"onClick={e => {onClickFetch()}}>Fetch</button>
        </div>
        </Transition>
      </div>
  
)


export default FrontView;
