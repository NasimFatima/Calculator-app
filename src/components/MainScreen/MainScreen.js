/* eslint-disable react/prop-types */
import React from 'react';

import { Button } from '../Button/index';
import { BUTTONS_SYMBOL } from '../../utils/constants';
import { TextScreen } from '../TextScreen/index';
import { Container, Wrapper } from './style';

export const MainScreenComponent = props => {
  const { result, calculate, error } = props;
  return (
    <Container>
      <p> CALCULATOR </p>
      <TextScreen value={result} error={error}></TextScreen>

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
