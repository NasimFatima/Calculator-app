/* eslint-disable react/prop-types */
import React from 'react';

import { Box, Error, Expression } from './style';

export const TextScreenComponent = ({ expression, error }) => {
  return (
    <Box>
      {error.length === 0 ? (
        <Expression> {expression} </Expression>
      ) : (
          <Error> {error} </Error>
        )}
    </Box>
  );
};
