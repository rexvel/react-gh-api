import { combineReducers } from 'redux';
import users from './userArrReducer.js';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;