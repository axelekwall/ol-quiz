import { combineReducers, createStore } from "redux";
import './actions';

            // state = 
            // {
            //     quiz: {
            //         name: "Studenträtt",
            //         desc: "Ett quiz om studenträtt",
            //         numberOfQuestion: 2
            //     },
            //     currentView: UI.FRONT,
            //     currentQuestion: 0,
            //     questions: [{
            //         text: "Hej",
            //         ans: [" "," ", " "],
            //         ansText: "Get money",
            //         correctIndex: 1
            //     }, {
            //         text: "Hej",
            //         ans: [" ", " ", " "],
            //         ansText: "Get money",
            //         correctIndex: 1
            //     }],
            //     selectedAnswer: 0,
            //     correctAnswers: 0



const quiz = (state = {}, action) => {
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
    }
};


const questions = (state = [], action) => {
    switch(action.type) {
        case FETCH_QUIZ_RECEIVE:{
            return action.quiz.questions;
        }
    }
};

const currentQuestion = (state = 0, action) => {
    switch(action.type) {
        case NEXT_QUESTION:
            return state + 1;
    }
};

const selectedAnswer = (state = 0, action) => {
    switch(action.type) {
        case ANSWER_QUESTION:
            return action.answer;
    }
};

const currentView = (state = UI.FRONT, action) => {
    switch(action.type){
        case SET_UI_VIEW:
            return action.view;
        case ANSWER_QUESTION:
            return UI.ANSWER;
        case NEXT_QUESTION:
            return UI.QUESTION;
        case FINISH_QUIZ:
            return UI.SUMMARY;
        case START_QUIZ:
            return UI.QUESTION;
    }
};

const correctAnswers = (state = 0, action) => {
    switch(action.type) {
        case CORRECT_ANSWER:
            return state + 1;
    }
};



export const quizApp = combineReducers({
    quiz,
    currentView,
    currentQuestion,
    questions,
    selectedAnswer,
    correctAnswers,
});
