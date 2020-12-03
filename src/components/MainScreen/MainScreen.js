/* eslint-disable no-fallthrough */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import React from 'react';

import { Button } from '../Button/index';
import { BUTTONS_SYMBOL } from '../../utils/constants';
import { TextScreen } from '../TextScreen/index';
import { Container, Wrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { setCalculatorState } from '../../redux';

import { evaluateExpression } from '../../utils/calculations';
import { isOperand } from '../../utils/validators';

export const MainScreen = () => {
  const intialValue = 0;
  const state = useSelector(state => state.calculator);
  const dispatch = useDispatch();

  const calculateExpression = () => {
    const response = evaluateExpression(state.expression);
    response['success']
      ? dispatch(setCalculatorState({ expression: response['data'] }))
      : dispatch(setCalculatorState({ error: 'Malformed Expression' }));
  };

  const makeExpression = value => {
    if (isOperand(value)) {
      dispatch(setCalculatorState({ dotCount: intialValue }));
    }
    if (value === '.') {
      if (state.dotCount < 1) {
        dispatch(setCalculatorState({ dotCount: state.dotCount + 1 }));
      } else dispatch(setCalculatorState({ error: 'Malformed Expression' }));
    }
    dispatch(setCalculatorState({ expression: state.expression + value }));
  };

  const resetValues = () => {
    dispatch(
      setCalculatorState({ expression: '', dotCount: intialValue, error: '' })
    );
  };

  const FUNCTIONS_MAPPING = {
    AC: () => resetValues(),
    '=': () => calculateExpression(),
  };

  const handleClick = event => {
    const value = event.target.value;
    FUNCTIONS_MAPPING.hasOwnProperty(value)
      ? FUNCTIONS_MAPPING[value]()
      : makeExpression(value);
  };
  return (
    <Container>
      <p> CALCULATOR </p>
      <TextScreen />

      <Wrapper>
        {BUTTONS_SYMBOL.map(item => (
          <Button key={item} value={item} onClick={handleClick}>
            {item}
          </Button>
        ))}
      </Wrapper>
    </Container>
  );
};
