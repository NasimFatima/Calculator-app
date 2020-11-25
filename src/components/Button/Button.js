/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import { StyledButton } from './style';

export const Button = ({ value, onClick }) => {
  return (
    <StyledButton value={value} onClick={onClick}>
      {value}
    </StyledButton>
  );
};
