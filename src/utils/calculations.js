import { VerifyExpression, formatExprssionForCalculations } from './validators'

const response = {
  'success': true,
  'result': '',
  'errorString': 'Malformed Expression'
}

export const evaluateExpression = (expression) => {
  try {
    if (VerifyExpression(expression))
      response['result'] = eval(formatExprssionForCalculations(expression)).toString();
  } catch (err) {
    response['success'] = false
  }
  return response
};
