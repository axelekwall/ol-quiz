import fetch from 'isomorphic-fetch';

/*
 * action types
 */

export const SET_UI_VIEW = 'SET_UI_VIEW'; // behövs kanske inte, UIView kan byta i de andra actions

export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const FINISH_QUIZ = 'FINISH_QUIZ';
export const START_QUIZ = 'START_QUIZ';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const FETCH_QUIZ_REQUEST = 'FETCH_QUIZ_REQUEST'; // call api to fetch a quiz
export const FETCH_QUIZ_SUCCESS = 'FETCH_QUIZ_SUCCESS'; // api callback on success
export const FETCH_QUIZ_ERROR = 'FETCH_QUIZ_ERROR'; // api callback on error

/*
 * other constants
 */

export const UI = {
    FRONT: 'UI_SHOW_FRONT',
    SUMMARY: 'UI_SHOW_SUMMARY',
    QUESTION: 'UI_SHOW_QUESTION',
    ANSWER: 'UI_SHOW_ANSWER',
    //PROGRESS: 'UI_SHOW_PROGRESS'
};

/*
 * action creators
 */

export function setView(view){
    return {type: SET_UI_VIEW, view};
}

export function answerQuestion(score, id) {
    return { type: NEXT_QUESTION, score, id}
}

export function nextQuestion() {
    return { type: NEXT_QUESTION }
}

export function startQuiz() {
    return { type: START_QUIZ };
}

export function finishQuiz(){
    return {type: FINISH_QUIZ };
}

function requestQuiz() {
    return { type: FETCH_QUIZ_REQUEST };
}

function receiveQuiz(json){
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz: json

    };
}

export function fetchQuiz(name) {
    return dispatch => {
      dispatch(requestQuiz());

      return fetch('/api/quiz/'+name)
        .then(response => response.json())
        .then(json => dispatch(receiveQuiz(json)));
    }
  }

