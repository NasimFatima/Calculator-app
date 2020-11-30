/* eslint-disable no-fallthrough */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import React from 'react';

import { Button } from '../Button/index';
import { BUTTONS_SYMBOL } from '../../utils/constants';
import { TextScreen } from '../TextScreen/index';
import { Container, Wrapper } from './style';
import { useDispatch } from 'react-redux';
import {
  calculateExpression,
  clearExpression,
  setExpression,
} from '../../redux';

export const MainScreen = () => {
  const dispatch = useDispatch();

  const handleClick = event => {
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
          <Button key={item} value={item} onClick={handleClick}>
            {item}
          </Button>
        ))}
      </Wrapper>
    </Container>
  );
};
