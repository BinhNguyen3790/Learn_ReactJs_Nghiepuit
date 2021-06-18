import * as Types from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];
var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};
var randomID = () => {
  return s4() + s4() + s4() + '-' + s4() + s4() + s4() + '-' + s4() + s4() + s4();
}

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_TASKS:
      return state;
    case Types.ADD_TASK:
      var newTasks = {
        id: randomID(),
        name: action.task.name,
        status: action.task.status === 'true' ? true : false
      }
      state.push(newTasks);
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default: return state;
  }
}

export default tasks;