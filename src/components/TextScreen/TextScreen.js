/* eslint-disable react/prop-types */
import React from 'react';

import { Box, Error, Expression } from './style';
import { useSelector } from 'react-redux';

export const TextScreenComponent = () => {
  const state = useSelector(state => state.calculator);
  return (
    <Box>
      {!state.error ? (
        <Expression> {state.expression} </Expression>
      ) : (
          <Error> {state.error} </Error>
        )}
    </Box>
  );
};
