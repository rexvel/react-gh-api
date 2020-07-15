import { combineReducers } from 'redux';
import users from './userArrReducer';

const rootReducer = combineReducers({
  users,
});

export default rootReducer;
