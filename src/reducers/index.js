import { combineReducers, createStore } from "redux";
import './actions';

const questionReducer = (state, action) => {
    switch(action.type) {
        case ANSWER_QUESTION: {
            // change ui, change selectedanswer
            // progress bar?
            if(action.answer == true){
                return state = { ...state, answer: "correct"};
            }
        }
        case NEXT_QUESTION: {
            // next question
            // change ui: UI_SHOW_QUESTION
            // change current question: currentQuestion + 1 (index of questions array)
            let q = state.currentQuestion + 1;
            return state = { ...state, currentQuestion: q} ;
        }

        case "GET_ANSWERS":{
            data = getdata (action.questionid);
            return state = {...state, answersData: data};
        }
        defult: {
            state = 
            {
                quizName: "Studenträtt",
                desc: "Ett quiz om studenträtt",
                numberOfQuestion: 2,
                questions: [{
                    text: "Hej",
                    ans: [" "," ", " "],
                    ansText: "Get money",
                    correctIndex: 1
                }, {
                    text: "Hej",
                    ans: [" ", " ", " "],
                    ansText: "Get money",
                    correctIndex: 1
                }],
                currentQuestion: 0,
                selectedAnswer: 0,
                correctAnswers: 0
            }
            return state;
        }
            
    }
};

const questionsReducer = (state = [], action) => {
    switch(action.type) {
        case NEXT_QUESTION
    }
}

const quizApp = (state = [], action) => {
    switch(action.type) {
        case FETCH_QUIZ: {
            return state;
        }
        case FINISH_QUIZ: {
            return state;
        }
    }
};