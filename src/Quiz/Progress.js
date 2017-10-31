import React, {Component} from 'react';

import ProgressSteps from 'react-progress-steps';

class Progress extends Component {
	constructor(props) {
		super(props);
   }
 

  render() {
  	return(	
  		<div className="prog-bar">
        <ProgressSteps steps={this.props.progressLength} current={this.props.progressCount} styling={false} />
  		</div>

  	);
  }
}

export default Progress;

