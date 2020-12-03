/* eslint-disable no-fallthrough */
import { CALCULATE } from '../Type/calculatorType';
const initial_state = {
  expression: '',
  dotCount: 0,
  error: '',
};

export const calculatorReducer = (state = initial_state, action) => {

  const payload = action.payload
  switch (action.type) {
    case CALCULATE:
      return { ...state, ...payload }

    default:
      return state;
  }
};
