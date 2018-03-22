import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

var greeting = "Hurra!";
var infotext = "Du är klar med quizet"

class Finished extends Component {
	constructor(props){
		super(props)
   	this.state = {number: 0}
    this.interval = 10;
    this.endNumber = 6;
  }

  componentDidMount() {
      this.setState({percent: 0 });
      this.intervalRun = setInterval(this.tick, this.interval);

      if(this.props.userScore >= 25){
        greeting = "Du blev profil nr 4"
        infotext = "Tralalalla info"
      }else if(this.props.userScore >= 17){
        greeting = "Du blev profil nr 2"
        infotext = "Tralalalla info"
      }else if(this.props.userScore >= 9){
        greeting = "Du blev profil nr 2"
        infotext = "Tralalalla info"
      }else{
        greeting = "Du blev profil nr 1"
        infotext = "Tralalalla info"
      }

     // this.sendData()
  }


// We skip sending data to Firebase. We do not have an answersArray anymore... 
  // sendData = () => {
  //   var payload = {
  // If we wanna send something, this is where we add what we want to send.
  //     answersArray: this.props.answersArray,
  //     correctAnswers: this.props.correctAnswers
  //   };

  //   fetch('/api/result/quiz/'+this.props.id, {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST',
  //     body: JSON.stringify(payload)
  //   });
  // }

  tick = () => {
    if(this.state.number < this.endNumber){
        clearInterval(this.intervalRun);
        this.interval = this.interval * 1.03;
        this.intervalRun = setInterval(this.tick, this.interval);

        this.setState({number: this.state.number + 1});
      }else{
        clearInterval(this.intervalRun);
      }
  }
	
  // this.state.number <- tickfunktion

  render(){
		return(
			<div id="finished-view">
    			<h2>Du fick {this.props.userScore} poäng</h2>
          <h1>{greeting}</h1>
          <p>{infotext}</p>
    	
          <div id="link-to-ol">
            <a href="http://www.osqledaren.se" >Till Osqledaren.se</a>
          </div>		
  		</div>
		)
	}
}


export default Finished;
