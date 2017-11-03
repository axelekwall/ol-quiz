import React, {Component} from 'react';

class Finished extends Component {
	constructor(props){
		super(props)
		this.state = {number: 0}
		this.tick = this.tick.bind(this)
	}

	componentDidMount() {
    	this.setState({number: 0 });
    	this.interval = setInterval(this.tick, 1000);
  	}

	tick(){
		if(this.state.number < 50){
    		this.setState({number: this.state.number + 1});
    	}else{
    		clearInterval(this.interval);
    	}
	} 

	render(){
		return(
			<div id="finished-view">
    			<h1>Great job!</h1>
    			<h2>{this.props.correctAnswers}/{this.state.number} correct answers!</h2>
  			</div>
		)
	}
}


export default Finished;
