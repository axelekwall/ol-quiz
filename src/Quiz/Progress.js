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
  		<div className="prog-bar" style={{display:'none'}}>
             <p  style={{display:'none'}} >My progress is {this.props.progressCount}</p>
             <div className="prog-bar-fill" width={this.props.progressCount} style={{display:'none'}}></div>
  		</div>

  	);
  }
}

export default Progress;

