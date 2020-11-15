import status from './status';
import sort from './sort';
import { combineReducers } from 'redux';

let myReducer = combineReducers({
  status,
  sort
})

export default myReducer;