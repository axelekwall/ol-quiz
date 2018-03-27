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
        greeting = "Emma Watson"
        infotext = `Wow! You are an ICON for women and have inspired many people, including Malala Yousafzai to call themselves feminists. 

        With your countless speeches, campaigns and hard work for gender equality, you certainly stand up for women in a wide variety of ways. 
        
        “We need to live in a culture that values and respects and looks up and idolizes women as much as men”`
      }
      else if(this.props.userScore >= 17){
        greeting = "Magnus Betner"
        infotext = `A man who is a feminist? What is this sorcery? 
                    
                  You think that biologically, humans only need to eat, reproduce and go to the WC. Gender is just a social construction, shaped by the society and culture that we are all part of maintaining. You say that the solution to inequality is that men realise that they are the problem, and you then try to fix it. 
        
                  You work in an environment that is generally not really open to these kind of questions, or women in general, but you are still not beating around the bush. `

      }
      else if(this.props.userScore >= 9){
        greeting = "Penny Schulman"
        infotext = "You do not know very much about feminism, in fact you have just finished pre-school, but you do believe that boys are trash and “TJEJER E BÄST!”"
      }
      else{
        greeting = "Alexander Bard"
        infotext = "You think that the swedish #metoo movement is a hoax which has gone way to far. Women are neither more exposed to inequality than men, nor underprivileged. Women just need to get their shit together and carry on."
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
    			<h2>Congratulations! <br/> <br/> Your feminists icon is...</h2>
          <h1>{greeting}</h1>
          <p>{infotext}</p>
          
    	
          <div id="link-to-ol">
            <p>Jämställdhetsveckan starts the 16th April and finishes the 20th April. Check us, and our events, out and learn more about gender equality to either change your score or just for your enjoyment!</p>
            <p>Följ oss på: 
              <br/>
            <a href="https://www.facebook.com/Jamstalldhetsveckan/" style={{margin:"5px", fontSize:"12px"}}>Facebook</a>
            <a href="http://instagram.com/jamstalldhetsveckan" style={{margin:"5px", fontSize:"12px"}}>Instagram</a>
            <a href="https://www.linkedin.com/company/10321330/" style={{margin:"5px", fontSize:"12px"}}>LinkedIn</a>
            <a href="http://www.jamstalldhetsveckan.se/" style={{margin:"5px", fontSize:"12px"}}>Jämställdhetsveckan.se</a>
            </p>
          </div>		
  		</div>
		)
	}
}


export default Finished;
