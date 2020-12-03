/* eslint-disable react/prop-types */
import React from 'react';

import { Box, Error, Expression } from './style';
import { useSelector } from 'react-redux';

export const TextScreenComponent = () => {
  const { error, expression } = useSelector(state => state.calculator);
  return (
    <Box>
      {!error ? (
        <Expression> {expression} </Expression>
      ) : (
          <Error> {error} </Error>
        )}
    </Box>
  );
};
