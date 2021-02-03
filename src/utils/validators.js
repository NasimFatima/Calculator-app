import { OPERATORS_MAPPING } from './constants';

export const isOperand = value => /[+/\-x*÷%]$/.test(value);

export const VerifyExpression = expression => {
  const re = /(?:(?:^|[-+_x*÷(%/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*)?(?:[)]*))+$/;
  return re.test(expression);
};

export const formatExprssionForCalculations = expression => {
  if (expression.startsWith('0')) expression = expression.replace('0', '');
  for (const [key, value] of Object.entries(OPERATORS_MAPPING)) {
    expression = expression.replace(value, key);
  }
  return expression;
};
