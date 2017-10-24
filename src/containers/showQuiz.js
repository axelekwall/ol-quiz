import { connect } from 'react-redux'
import './actions'
import Quiz from '../Quiz/Quiz.js'

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    currentView: state.currentView,
    question: state.questions,
    selectedAnswer: state.selectedAnswer,
    correctAnswer: state.correctAnswer,
    currentQuestion: state.currentQuestion
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAnswer: (answer) => {
        dispatch(answerQuestion(answer));
    },
    onClickNext: () => {
        dispatch(nextQuestion());
    },
    onCorrectAnswer: () => {
        dispatch(correctAnswer());
    },
    onClickStart: () => {
        dispatch(startQuiz());
    },
    onFinishQuiz: () => {
        dispatch(finishQuiz());
    }
  }
}

const showQuiz = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

export default showQuiz;