import { applyMiddleware, createStore } from 'redux';
import quizApp from '../reducers';

let store = createStore(quizApp, applyMiddleware() );

store.subscribe(() => {
    console.log("store changed", store.getState());
});

console.log(store.getState());

export default store;