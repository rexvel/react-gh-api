import { SET_USERS_SUCCESS, SET_USERS_ERROR } from '../actions/types';

const initState = {
  error: null,
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_USERS_SUCCESS:
      return {
        ...action.payload.users,
      };
    case SET_USERS_ERROR:
      return {
        ...state,
        error: action.payload.users,
      };

    default:
      return state;
  }
};
