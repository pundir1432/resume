// src/redux/reducer.js
import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
    count: 0
};

const counterReducer = (state = initialState, action) => {
  console.log('Reducer called with action:', action, 'and state:', state);
  switch (action.type) {
      case INCREMENT:
          return {
              ...state,
              count: state.count + 1
          };
      case DECREMENT:
          return {
              ...state,
              count: state.count - 1
          };
      default:
          return state;
  }
};


export default counterReducer;
