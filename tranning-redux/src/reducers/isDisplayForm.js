import * as Types from './../constants/ActionTypes';

var initialState = false;

const isDisplayForm = (state = initialState, action) => {
  switch (action.type) {
    case Types.TOGGLE_FORM:
      return !state;
    case Types.OPEN_FORM:
      return true;
    case Types.CLOSE_FORM:
      return false;
    default: return state;
  }
}

export default isDisplayForm;