/* eslint-disable no-fallthrough */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import React from 'react';

import { Button } from '../Button/index';
import { BUTTONS_SYMBOL } from '../../utils/constants';
import { TextScreen } from '../TextScreen/index';
import { Container, Wrapper } from './style';
import { useDispatch, useSelector } from 'react-redux';
import {
  calculateExpression,
  clearExpression,
  setExpression,
} from '../../redux';

export const MainScreen = () => {
  const state = useSelector(state => state.calculator);
  console.log('state::', state);
  const dispatch = useDispatch();

  const dispatchMapping = event => {
    const value = event.target.value;
    if (value === '=') dispatch(calculateExpression());
    else if (value === 'AC') dispatch(clearExpression());
    else dispatch(setExpression(value));
  };

  return (
    <Container>
      <p> CALCULATOR </p>
      <TextScreen />

      <Wrapper>
        {BUTTONS_SYMBOL.map(item => (
          <Button key={item} value={item} onClick={dispatchMapping}>
            {item}
          </Button>
        ))}
      </Wrapper>
    </Container>
  );
};
