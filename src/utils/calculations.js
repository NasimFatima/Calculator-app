import { VerifyExpression, formatExprssionForCalculations } from './validators';

export const evaluateExpression = expression => {
  try {
    if (VerifyExpression(expression)) {
      expression = formatExprssionForCalculations(expression);
      const result = evaluate(expression);
      return formatResponse(true, result, '');
    }
  } catch (err) {
    return formatResponse(false, '', 'Malformed Expression');
  }
};

const evaluate = formula => {
  var func = new Function('return ' + formula);
  return func();
}

const formatResponse = (success = true, result = '', errorString = '') => {
  return {
    success: success,
    result: result,
    errorString: errorString,
  };
};
