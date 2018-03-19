import { connect } from 'react-redux'
import { answerQuestion, nextQuestion, startQuiz, finishQuiz, fetchQuiz} from '../actions'
import Quiz from '../Quiz/Quiz.js'

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    currentView: state.currentView,
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    userScore: state.userScore
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // changed to score instead of correct/incorrect
    onClickAnswer: (score, id) => {
        dispatch(answerQuestion(score, id));
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