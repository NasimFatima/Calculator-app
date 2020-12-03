import { addDecorator } from '@storybook/react'
import { store } from '../src/redux/store';
import { Provider } from 'react-redux';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(story => (
  <Provider store={store}>
    {story()}
  </Provider>
))
