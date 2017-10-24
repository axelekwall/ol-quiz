import { combineReducers, createStore } from "redux";
import { FETCH_QUIZ_REQUEST,FETCH_QUIZ_SUCCESS,NEXT_QUESTION,UI,ANSWER_QUESTION,FINISH_QUIZ,START_QUIZ,CORRECT_ANSWER,INCORRECT_ANSWER,SET_UI_VIEW
    } from '../actions';

let hardState = {

    quiz: {
            name: "Studenträtt",
            desc: "Ett quiz om studenträtt",
            numberOfQuestions: 2
    },
    currentView: "UI_SHOW_FRONT",
    currentQuestion: 0,
    questions: [{text: "Du bryter armen dagen innan algebratentan. Du kuggar eftersom att du inte kan skriva och tappar ditt csn. Vad kan du göra?",
                ans: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean.", 
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean.", 
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit aenean."],
                ansText: "Answer text here",
                correctIndex: 1},
                {text: "Fråga 2",
                ans: ["Ja2", "Nej2", "Kanske2", "Hej2"],
                ansText: "Answer text 2 here",
                correctIndex: 2}],
    selectedAnswer: 0,
    correctAnswers: 0          
    
}



const quiz = (state = hardState.quiz, action) => {
    switch(action.type){
        case FETCH_QUIZ_SUCCESS: {
            return {
                name: action.quiz.name,
                desc: action.quiz.desc,
                numberOfQuestions: action.quiz.numberOfQuestions,
                isFetchinQuiz: false
            }
        }
        case FETCH_QUIZ_REQUEST: {
            return {...state,
                isFetchinQuiz: true
            }
        }
        default:
            return state;
    }
};


const questions = (state = hardState.questions, action) => {
    switch(action.type) {
        case FETCH_QUIZ_SUCCESS:{
            return action.quiz.questions;
        }
        default:
            return state;
    }
};

const currentQuestion = (state = 0, action) => {
    switch(action.type) {
        case NEXT_QUESTION: {
            return state + 1;
        }
        default:
            return state;
    }
    
};

const selectedAnswer = (state = 0, action) => {
    switch(action.type) {
        case INCORRECT_ANSWER:
            return action.answer;
        case CORRECT_ANSWER:
            return action.answer;
        default:
            return state;
    }
};

const currentView = (state = UI.FRONT, action) => {
    switch(action.type){
        case SET_UI_VIEW:
            return action.view;
        case INCORRECT_ANSWER:
            return UI.ANSWER;
        case CORRECT_ANSWER:
            return UI.ANSWER;
        case NEXT_QUESTION:
            return UI.QUESTION;
        case FINISH_QUIZ:
            return UI.SUMMARY;
        case START_QUIZ:
            return UI.QUESTION;
        default:
            return state;
    }
};

const correctAnswers = (state = 0, action) => {
    switch(action.type) {
        case CORRECT_ANSWER:
            console.log("rätt")
            return state + 1;
        default:
            return state;
    }
};



const quizApp = combineReducers({
    quiz,
    currentView,
    currentQuestion,
    questions,
    selectedAnswer,
    correctAnswers,
});

export default quizApp;
