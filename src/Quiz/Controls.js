import React, {Component} from 'react';


class Controls extends Component {
  
  clickMyButton() {
  	console.log("CLICK ME");
  }

  render() {
  	return(
  		<div>
  			<p>Controls here</p>
  			<button onClick={this.clickMyButton.bind(this)}>Clickclick</button>
		</div>
  	)
  }
}

export default Controls;
