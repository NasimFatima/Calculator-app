import { CLEAR, CALCULATE_EXPRESSION, SET_EXPRESSION } from './calculatorType';

export const clearExpression = () => {
  return {
    type: CLEAR,
  };
};

export const calculateExpression = () => {
  return {
    type: CALCULATE_EXPRESSION,
  };
};

export const setExpression = value => {
  return {
    type: SET_EXPRESSION,
    payload: value,
  };
};
