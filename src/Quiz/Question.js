import React, {Component} from 'react';


class Question extends Component {



  render() {
  	return(
  		<div style={{display:'none'}}>
        <p>{this.props.questions[this.props.questionNumber]}</p>
	  		<button value="nej" onClick={this.props.actionME}>NEJ</button> 
        <button value="ja" onClick={this.props.actionME}>JA</button>
  		</div>
  	)
  }
}

export default Question;
