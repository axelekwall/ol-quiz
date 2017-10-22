import { applyMiddleWare, createStore } from 'redux';
import quizApp from './reducers';

let store = createStore(quizApp, applyMiddleWare() );

store.subscribe(() => {
    console.log("store changed", store.getState());
});

export default store;