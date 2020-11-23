/* eslint-disable no-prototype-builtins */
import React, { useState } from 'react';

import { isOperand } from '../utils/validators';
import MainScreen from '../components/mainScreen/mainScreen';
import { evaluateExpression } from '../utils/calculations'

const Calculator = () => {
  const intialValue = 0;
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  let [dotCount, setDotCount] = useState(intialValue);

  const calculateExpression = () => {
    const response = evaluateExpression(result)
    console.log("response", response)
    response['success'] ? setResult(response['result']) : setError(response['errorString'])
  };

  const makeExpression = value => {
    if (isOperand(value)) {
      setDotCount(intialValue);
    }
    if (value === '.') {
      if (dotCount < 1) {
        setDotCount(prevCount => prevCount + 1);
      } else setError('Malformed Expression');
    } else setResult(prevResult => prevResult + value);
  };

  const resetValues = () => {
    setResult('');
    setDotCount(intialValue);
    setError('');
  };

  const FUNCTIONS_MAPPING = {
    "AC": () => resetValues(),
    "=": () => calculateExpression()
  }

  function calculate(event) {
    const value = event.target.value;
    FUNCTIONS_MAPPING.hasOwnProperty(value) ? FUNCTIONS_MAPPING[value]() : makeExpression(value)
  }

  return <MainScreen result={result} calculate={calculate} error={error} />;
};

export default Calculator;
