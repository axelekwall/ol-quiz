import React, {Component} from 'react';
import './App.css';
import Quiz from "./Quiz/Quiz.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">OL QUIZ</h1>
        </header>
        <Quiz/>
      </div>
    );
  }
}

export default App;
