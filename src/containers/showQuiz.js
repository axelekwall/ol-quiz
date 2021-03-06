import { connect } from 'react-redux'
import { answerQuestion, nextQuestion, startQuiz, finishQuiz, fetchQuiz} from '../actions'
import Quiz from '../Quiz/Quiz.js'

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    currentView: state.currentView,
    questions: state.questions,
    selectedAnswer: state.selectedAnswer,
    correctAnswers: state.correctAnswers,
    currentQuestion: state.currentQuestion,
    answersArray: state.answersArray
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAnswer: (correct, id) => {
        dispatch(answerQuestion(correct, id));
    },
    onClickNext: () => {
        dispatch(nextQuestion());
    },
    onClickStart: () => {
        dispatch(startQuiz());
    },
    onFinishQuiz: () => {
        dispatch(finishQuiz());
    },
    onClickFetch: (name) => {
      dispatch(fetchQuiz(name));
    }
  }
}

const ShowQuiz = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

export default ShowQuiz;