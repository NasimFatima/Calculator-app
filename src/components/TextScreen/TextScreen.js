/* eslint-disable react/prop-types */
import React from 'react';

import { Box, Error, Expression } from './style';

export const TextScreenComponent = ({ value, error }) => {
  return (
    <Box>
      {error.length === 0 ? (
        <Expression> {value} </Expression>
      ) : (
          <Error> {error} </Error>
        )}
    </Box>
  );
};
