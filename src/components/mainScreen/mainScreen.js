/* eslint-disable react/prop-types */
import React from 'react';

import Button from '../button/button';
import { BUTTONS } from '../../utils/constants';
import TextScreen from '../textScreen/textScreen';
import { Container, Wrapper } from './style';

const MainScreen = props => {
  const { result, calculate, error } = props;
  return (
    <Container>
      <p> CALCULATOR </p>
      <TextScreen value={result} error={error}></TextScreen>

      <Wrapper>
        {BUTTONS.map(item => (
          <Button key={item} value={item} onClick={calculate}>
            {item}
          </Button>
        ))}
      </Wrapper>
    </Container>
  );
};

export default MainScreen;
