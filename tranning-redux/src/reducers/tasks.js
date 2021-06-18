import * as Types from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [
  {
    id: 1,
    name: "Learn React",
    status: true
  },
  {
    id: 3,
    name: "Learn C",
    status: false
  },
  {
    id: 5,
    name: "Learn Js",
    status: true
  }
];

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_TASKS:
      return state;
    default: return state;
  }
}

export default tasks;