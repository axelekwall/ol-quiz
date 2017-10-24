import { connect } from 'react-redux'
import { answerQuestion, nextQuestion, correctAnswer, startQuiz, finishQuiz} from '../actions'
import Quiz from '../Quiz/Quiz.js'

const mapStateToProps = state => {
  return {
    quiz: state.quiz,
    currentView: state.currentView,
    questions: state.questions,
    selectedAnswer: state.selectedAnswer,
    correctAnswers: state.correctAnswers,
    currentQuestion: state.currentQuestion
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAnswer: (answer,correct) => {
        dispatch(answerQuestion(answer,correct));
    },
    onClickNext: () => {
        dispatch(nextQuestion());
    },
    onClickStart: () => {
        dispatch(startQuiz());
    },
    onFinishQuiz: () => {
        dispatch(finishQuiz());
    }
  }
}

const ShowQuiz = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz)

export default ShowQuiz;