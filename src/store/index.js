import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

// ---------------------------------------------
// Import the right quiz data depending on quiz: 
// * index.js = OLs quiz
// * JSVQuiz = Jämställdhetsveckans quiz 
import quizApp from '../reducers/JSVQuiz';
// import quizApp from '../reducers/index';
// ---------------------------------------------

let store = createStore(quizApp, applyMiddleware(thunkMiddleware) );

// store.subscribe(() => {
//     console.log("store changed", store.getState());
// });

// console.log(store.getState());

export default store;