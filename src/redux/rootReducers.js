import { combineReducers } from 'redux';
import { calculatorReducer } from './calculator/calculatorReducer';

export const rootReducer = combineReducers({
  calculator: calculatorReducer,
});
