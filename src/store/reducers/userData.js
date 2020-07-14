import { GET_USER_SUCCESS, GET_USER_ERROR } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                exactUser: action.payload.user,
            };
        case GET_USER_ERROR:
            return {
                ...state,
                error: action.payload.error,
            };

        default:
            return state;
    }
};
