import { combineReducers } from 'redux';
import {todoReducer,  commentReducer } from './redux/reducer'; // Import todoReducer
import countReducer from './redux/count/reducer'; // Import countReducer

const rootReducer = combineReducers({
  todos: todoReducer,
  comments : commentReducer,
  count: countReducer
});


export default rootReducer;
