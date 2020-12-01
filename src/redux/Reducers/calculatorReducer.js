/* eslint-disable no-fallthrough */
import { CALCULATE_EXPRESSION, CLEAR, SET_EXPRESSION } from '../Type/calculatorType';
import { evaluateExpression } from '../../utils/calculations';
import { isOperand } from '../../utils/validators';

const initial_state = {
  expression: '',
  dotCount: 0,
  error: '',
};

const setDotCount = (value, dotCount) => {
  if (isOperand(value)) return 0;
  return value === '.' && dotCount + 1;
};

const setError = (value, dotCount) => {
  return value === '.' && dotCount > 1 && 'Malformed Error';
};

export const calculatorReducer = (state = initial_state, action) => {
  let response = null;
  switch (action.type) {
    case CLEAR:
      return {
        ...state,
        expression: '',
        error: '',
        dotCount: 0,
      };
    case CALCULATE_EXPRESSION:
      response = evaluateExpression(state.expression);
      return {
        ...state,
        expression: response['success'] ? response['data'] : '',
        error: !response['success'] ? response['errorString'] : '',
      };
    case SET_EXPRESSION:
      response = setDotCount(action.payload, state.dotCount);
      return {
        ...state,
        expression: state.expression + action.payload,
        dotCount: response,
        error: setError(action.payload, response),
      };
    default:
      console.log('defualt state');
      return state;
  }
};
