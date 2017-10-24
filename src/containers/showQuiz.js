import { connect } from 'react-redux'
import './actions'
import Quiz from '../Quiz/Quiz.js'

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    currentView: state.currentView,
    question: state.questions,
    selectedAnswer: state.selectedAnswer,
    correctAnswer: state.correctAnswer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAnswer: (answer) => {
        dispatch(answerQuestion(answer));
    },
    onClickNext: () => {
        dispatch(nextQuestion());
    }
  }
}

const showQuiz = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

export default showQuiz;