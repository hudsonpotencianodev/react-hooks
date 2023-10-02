import { combineReducers } from 'redux';
import { counterReducer } from './counter';
export const Reducers = combineReducers({
  counterState: counterReducer,
});