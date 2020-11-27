import React from 'react';
import ReactDOM from 'react-dom';
import { Body } from './style';
import { Calculator } from './components/Calculator/index';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Body>
      <Provider store={store}>
        <Calculator />
      </Provider>
    </Body>
  </React.StrictMode>,
  document.getElementById('root')
);
