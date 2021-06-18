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

export const actToggleForm = () => {
  return {
    type: Types.TOGGLE_FORM
  }
}

export const actOpenForm = () => {
  return {
    type: Types.OPEN_FORM
  }
}

export const actCloseForm = () => {
  return {
    type: Types.CLOSE_FORM
  }
}

export const actChangeStatus = (id) => {
  return {
    type: Types.CHANGE_STATUS,
    id
  }
}