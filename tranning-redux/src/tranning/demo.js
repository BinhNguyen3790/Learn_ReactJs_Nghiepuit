import { createStore } from 'redux';

let initialState = {
  status: true,
  sort: {
    by: "name",
    value: 1
  }
}

let myReducer = (state = initialState, action) => {
  if (action.type === 'TOGGLE_STATUS') {
    state.status = !state.status;
    return state;
  }

  if (action.type === 'TOGGLE_SORT') {
    let { by, value } = action.sort;
    let { status } = state;
    return {
      status: status,
      sort: {
        by: by,
        value: value
      }
    }
  }

  return state;
}

const store = createStore(myReducer);

console.log("Default: ", store.getState());
// Change Status
let action = { type: 'TOGGLE_STATUS' };
store.dispatch(action);
console.log("Toggle Status: ", store.getState());

let sortAction = {
  type: 'TOGGLE_SORT',
  sort: {
    by: 'name',
    value: -1
  }
}
store.dispatch(sortAction);
console.log("Toggle Sort: ", store.getState());

