import * as Types from '../constants/ActionTypes';

var initialState = {
  by: 'name',
  value: 1
}

const filterTable = (state = initialState, action) => {
  switch (action.type) {
    case Types.SORT_TASK:
      return {
        by: action.sort.by,
        value: action.sort.value
      };
    default: return state;
  }
};

export default filterTable;