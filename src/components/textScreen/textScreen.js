/* eslint-disable react/prop-types */
import React from 'react';

import { Box, Error, Expression } from './style';

const TextScreen = ({ value, error }) => {
  return (
    <Box>
      <Expression> {value} </Expression>
      <Error> {error} </Error>
    </Box>
  );
};

export default TextScreen;
