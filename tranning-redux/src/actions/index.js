import * as Types from './../constants/ActionTypes';

export const listAll = () => {
  return {
    type: Types.SHOW_TASKS
  }
}

export const actAddTask = (task) => {
  return {
    type: Types.ADD_TASK,
    task
  }
}