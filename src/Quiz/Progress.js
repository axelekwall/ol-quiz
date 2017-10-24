import React, {Component} from 'react';


class Progress extends Component {
	constructor(props) {
		console.log(props.progressCount)
		super(props);
		this.state = {
         style  : {
         	width : this.props.progressCount + 100 + 'px',
            height : '50px',
            backgroundColor : 'black',
        }
      };
   }
   setProgression() {
    var style = {};
    style.width = this.props.progressCount;
}

  render() {
  	return(	
  		<div className="prog-bar">
        <progress value={this.props.progressCount} max={this.props.progressLength}></progress>
  		</div>

  	);
  }
}

export default Progress;

