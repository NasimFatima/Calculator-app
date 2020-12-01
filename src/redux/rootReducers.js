import { combineReducers } from 'redux';
import { calculatorReducer } from './Reducers/calculatorReducer';

export const rootReducer = combineReducers({
  calculator: calculatorReducer,
});
