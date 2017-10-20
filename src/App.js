import React, {Component} from 'react';
import './App.css';
import Quiz from "./Quiz/Quiz.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        
        <div className="quiz-container">
        <Quiz/>
        </div>

        <div className="footer">
          <h3>OL</h3>
          <p>Producerad med kärlek på KTH</p>
        </div>
      </div>
    );
  }
}

export default App;
