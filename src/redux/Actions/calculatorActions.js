import { CALCULATE } from '../Type/calculatorType';

export const setCalculatorState = (data) => {
  return {
    type: CALCULATE,
    payload: data
  };
}
