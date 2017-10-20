import React, {Component} from 'react';


class Answer extends Component {
  

  render() {
  	return(
  		
  			<div class="answer-content">
  				<div class="left-answer-column">
  					<h1>RÄTT</h1>
  					<h3>25% <br/> svarade rätt på den här frågan.</h3>
				</div>
				<div class="right-answer-column">
  					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  						Nulla lacinia posuere sem eu viverra. 
  						Quisque posuere nec massa ultricies auctor. 
  						Praesent pellentesque metus risus, in congue massa tristique pulvinar. 
  						Integer finibus lacus quis leo efficitur fringilla et sed augue. 
  						Fusce dictum hendrerit arcu, ac posuere ex vestibulum in. 
  						Praesent luctus quis arcu id feugiat. Phasellus posuere eros ac diam faucibus gravida. </p>
  					<button type="button" class="next-question-button">NÄSTA</button>
				</div>
			</div>
  		
  	)
  }
}

export default Answer;
