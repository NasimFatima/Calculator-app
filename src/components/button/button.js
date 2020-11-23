/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

import Button from './style';

const button = ({ value, onClick }) => {
  return (
    <Button value={value} onClick={onClick}>
      {value}
    </Button>
  );
};

export default button;
