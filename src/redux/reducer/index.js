import { combineReducers } from 'redux';
import loadingReducer from './loadingReducer';
import createReducer from './createReducer';
import errorReducer from './errorReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  user: createReducer,
  error: errorReducer,
});
export default rootReducer;
