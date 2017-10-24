import React, {Component} from 'react';


class Answer extends Component {
  


  render() {

    var result;

    if(this.props.selectedAnswer == this.props.question.correctIndex){
      result = "Rätt"
      // ACTION - Set correct answer - dispatch
      this.props.onCorrectAnswer;
    }
    else{
      result = "Fel"
    }

  	return(


  		
  			<div className="answer-content">
  				
  					<div className="answer-text">
  						<h1>{result}</h1>
					</div>
					<div className="answer-statistics">
  						<h3>25%</h3> 
					</div>
					<div className="answer-statistics-text">
  						<h4>svarade rätt på den här frågan.</h4>
					</div>
					<div className="answer-info">
  						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
					</div>
  					<div className="next-button-div">
  						
  							<button type="button" className="next-question-button" onClick={this.props.nextQuestion}>Nästa</button>
						</div>
			</div>
  	)
  }
}

export default Answer;
