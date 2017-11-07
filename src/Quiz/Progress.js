import React, {Component} from 'react';

import { fadeIn } from 'react-animations'
import Radium, {StyleRoot} from 'radium';

import ProgressSteps from 'react-progress-steps';

const styles = {
  fadeIn: {
    animation: 'x 4s',
    animationName: Radium.keyframes(fadeIn, 'slideInDown')
  }
}

class Progress extends Component {
	constructor(props) {
		super(props);
   }
 

  render() {
  	return(	
      <StyleRoot>
  		<div className="prog-bar" style={styles.fadeIn}>
        <ProgressSteps steps={this.props.progressLength} current={this.props.progressCount} styling={false} />
  		</div>
      </StyleRoot>

  	);
  }
}

export default Progress;

