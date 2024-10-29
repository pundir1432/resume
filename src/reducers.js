import { combineReducers } from 'redux';
import todoReducer from './redux/reducer'; // Import todoReducer
import countReducer from './redux/count/reducer'; // Import countReducer

const rootReducer = combineReducers({
  todos: todoReducer,
  count: countReducer
});


export default rootReducer;
