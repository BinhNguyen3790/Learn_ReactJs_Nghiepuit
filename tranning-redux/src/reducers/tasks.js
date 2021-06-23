import * as Types from './../constants/ActionTypes';
var data = JSON.parse(localStorage.getItem("tasks"));
var initialState = data ? data : [];
var s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};
var randomID = () => {
  return s4() + s4() + s4() + '-' + s4() + s4() + s4() + '-' + s4() + s4() + s4();
}
var index = -1;

const tasks = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_TASKS:
      return state;
    case Types.SAVE_TASK:
      var task = {
        id: action.task.id,
        name: action.task.name,
        status: (action.task.status === 'true' || action.task.status === true) ? true : false
      }
      if (!task.id) {
        task.id = randomID();
        state.push(task);
      } else {
        index = findIndex(state, task.id);
        state[index] = task;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case Types.CHANGE_STATUS:
      index = findIndex(state, action.id);
      if (index !== -1) {
        state[index].status = !state[index].status;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    case Types.DELETE_TASK:
      index = findIndex(state, action.id);
      if (index !== -1) {
        state.splice(index, 1)
      }
      localStorage.setItem("tasks", JSON.stringify(state));
      return [...state];
    default: return state;
  }
};

var findIndex = (tasks, id) => {
  var result = -1;
  if (tasks.length > 0) {
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    })
  }
  return result;
};

export default tasks;