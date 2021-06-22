import * as Types from './../constants/ActionTypes';

var initialState = "";

const searchTask = (state = initialState, action) => {
  switch (action.type) {
    case Types.SEARCH_TASK:
      return action.keyword;
    default: return state;
  }
}

export default searchTask;