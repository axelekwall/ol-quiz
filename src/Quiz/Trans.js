import React, {Component} from 'react';
import Transition from 'react-motion-ui-pack';

//Component includes 
//* name of quiz
//* description text
//* start button 

//When clicking start user start quiz and is being directed to first question view

const Trans = ({children}) => (  
    <Transition
    enter={{ opacity: 1, translateY: 0 }}
    leave={{ opacity: 0, translateY: 100 }}
    component={false}>
        {children}
    </Transition>
)


export default Trans;