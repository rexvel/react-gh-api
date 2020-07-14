import { combineReducers } from 'redux';
import users from './usersArr';
import exactUser from './userData';

const rootReducer = combineReducers({
    users,
    exactUser,
});

export default rootReducer;
