/* eslint-disable comma-dangle */
import { SET_USERS_SUCCESS, SET_USERS_ERROR } from './types';

export const setUserArrSuccess = users => ({
    type: SET_USERS_SUCCESS,
    payload: {
        users,
    },
});

export const setUserArrError = error => ({
    type: SET_USERS_ERROR,
    payload: {
        error,
    },
});

const getUsers = () => async dispatch => {
    try {
        const response = await fetch('https://api.github.com/users?/since=10000&per_page=1000');
        const data = await response.json();

        dispatch(setUserArrSuccess(data));
    } catch (err) {
        console.error(err);
        dispatch(setUserArrError());
    }
};

export default getUsers;
