import React, {Component} from 'react';


class Progress extends Component {

  render() {
  	return(
  		<p>My progress is {this.props.progressCount}</p>
  	)
  }
}

export default Progress;
