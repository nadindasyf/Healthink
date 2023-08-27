// reducers.js

import { TOGGLE_MODE } from './actions';

// Definisikan initial state
const initialState = {
  darkMode: false,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODE:
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export default rootReducer;
