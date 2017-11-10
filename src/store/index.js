import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import quizApp from '../reducers';

let store = createStore(quizApp, applyMiddleware(thunkMiddleware) );

// store.subscribe(() => {
//     console.log("store changed", store.getState());
// });

// console.log(store.getState());

export default store;