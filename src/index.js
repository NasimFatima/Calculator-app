import React from 'react';
import ReactDOM from 'react-dom';
import { Body } from './style';
import { Calculator } from './components/Calculator/index';

ReactDOM.render(
  <React.StrictMode>
    <Body>
      <Calculator />
    </Body>
  </React.StrictMode>,
  document.getElementById('root')
);
