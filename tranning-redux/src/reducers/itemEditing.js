import * as Types from './../constants/ActionTypes';

var initialState = {
  id: "",
  name: "",
  status: false
};

const itemEditing = (state = initialState, action) => {
  switch (action.type) {
    case Types.EDIT_TASK:
      return action.task;
    default: return state;
  }
};

export default itemEditing;