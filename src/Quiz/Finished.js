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
  
      if(this.props.correctAnswers >= 4){
        greeting = "Grymt jobbat!"
        infotext = "Du behöver inte oroa dig för något, du har koll på allt du behöver."
      }else if(this.props.correctAnswers > 2){
        greeting = "Det där gick ju helt okej!"
        infotext = "Du har ju ganska bra koll ändå."
      }else{
        greeting = "Inte så bra jobbat!"
        infotext = "Du kanske ska läsa på lite..."
      }

      this.sendData()
  }


  sendData = () => {
    var payload = {
      answersArray: this.props.answersArray,
      correctAnswers: this.props.correctAnswers
    };

    fetch('/api/result/quiz/'+this.props.name, {
      method: 'POST',
      body: JSON.stringify(payload)
    }).then(
      console.log(JSON.stringify(payload)),
      console.log('sent')
    );
  }

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
    			<h2>Du fick rätt på {this.props.correctAnswers}/6 frågor</h2>
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
