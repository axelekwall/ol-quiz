import React, {Component} from 'react';
import Transition from 'react-motion-ui-pack';

// slide in from bottom
const Trans = ({children}) => (  
    <Transition
    enter={{ opacity: 1, translateY: 0 }}
    leave={{ opacity: 0, translateY: 100 }}
    component={false}>
        {children}
    </Transition>
)


export default Trans;