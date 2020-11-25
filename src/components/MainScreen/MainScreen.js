/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Button } from '../Button/index';
import { BUTTONS_SYMBOL } from '../../utils/constants';
import { TextScreen } from '../TextScreen/index';
import { Container, Wrapper } from './style';
import { evaluateExpression } from '../../utils/calculations';
import { isOperand } from '../../utils/validators';

export const MainScreen = () => {
  const intialValue = 0;
  const [expression, setExpression] = useState('');
  const [error, setError] = useState('');
  const [dotCount, setDotCount] = useState(intialValue);

  const calculateExpression = () => {
    const response = evaluateExpression(expression);
    response['success']
      ? setExpression(response['data'])
      : setError(response['errorString']);
  };

  const makeExpression = value => {
    if (isOperand(value)) {
      setDotCount(intialValue);
    }
    if (value === '.') {
      if (dotCount < 1) {
        setDotCount(prevCount => prevCount + 1);
      } else setError('Malformed Expression');
    }
    setExpression(prevExpression => prevExpression + value);
  };

  const resetValues = () => {
    setExpression('');
    setDotCount(intialValue);
    setError('');
  };

  const FUNCTIONS_MAPPING = {
    AC: () => resetValues(),
    '=': () => calculateExpression(),
  };

  const calculate = event => {
    const value = event.target.value;
    FUNCTIONS_MAPPING.hasOwnProperty(value)
      ? FUNCTIONS_MAPPING[value]()
      : makeExpression(value);
  };

  return (
    <Container>
      <p> CALCULATOR </p>
      <TextScreen expression={expression} error={error}></TextScreen>

      <Wrapper>
        {BUTTONS_SYMBOL.map(item => (
          <Button key={item} value={item} onClick={calculate}>
            {item}
          </Button>
        ))}
      </Wrapper>
    </Container>
  );
};
