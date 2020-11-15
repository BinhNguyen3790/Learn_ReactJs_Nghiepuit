import { createStore } from 'redux';
import { status, sort } from './actions/index';
import myReducer from './reducers/index'

let store = createStore(myReducer);
console.log(store.getState());

store.dispatch(status());
console.log(store.getState());

store.dispatch(sort({
  by: 'status',
  value: -1
}));
console.log(store.getState());

