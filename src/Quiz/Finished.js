import React, {Component} from 'react';

class Finished extends Component {
	constructor(props){
		super(props)
   	 	this.state = {percent: 0}
    this.tick = this.tick.bind(this)
    this.interval = 10;
  }

  componentDidMount() {
      this.setState({percent: 0 });

      this.intervalRun = setInterval(this.tick, this.interval);
    }

  tick(){
    if(this.state.percent < this.endPercent){
        clearInterval(this.intervalRun);

        this.interval = this.interval * 1.03;

        this.intervalRun = setInterval(this.tick, this.interval);

        this.setState({percent: this.state.percent + 1});
      }else{
        clearInterval(this.intervalRun);
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
