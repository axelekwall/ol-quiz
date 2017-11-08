import React, {Component} from 'react';
import ProgressSteps from 'react-progress-steps';
import Transition from 'react-motion-ui-pack';


class Progress extends Component {
  render() {
  	return(	
      <Transition
        enter={{ opacity: 1}}
        leave={{ opacity: 0}}
        component={false}
      >
        <div className="prog-bar" key="trans">
          <ProgressSteps steps={this.props.progressLength} current={this.props.progressCount} styling={false} />
        </div>
      </Transition>
  	);
  }
}

export default Progress;

