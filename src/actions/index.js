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

export const UIViews = {
    FRONT: 'UI_FRONT',
    SUMMARY: 'UI_SUMMARY',
    SHOW_QUESTION: 'UI_SHOW_QUESTION',
    SHOW_ANSWER: 'UI_SHOW_ANSWER',
    SHOW_PROGRESS: 'UI_SHOW_PROGRESS'
};

/*
 * action creators
 */

export function setView(view){
    return {type: SET_UI_VIEW, view};
}
export function answerQuestion(answer) {
    return { type: ANSWER_QUESTION, answer };
}

export function nextQuestion() {
    return { type: NEXT_QUESTION };
}

export function startQuiz(id) {
    return { type: START_QUIZ, id };
}

export function finishQuiz(){
    return {type: FINISH_QUIZ };
}

export function fetchQuiz(id){
    return {type: FETCH_QUIZ_REQUEST, id};
}

export function receiveQuiz(json){
    return {
        type: FETCH_QUIZ_SUCCESS,
        quiz: json.data.children.map(child => child.data) // ändra
    };
}