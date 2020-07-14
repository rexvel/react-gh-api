import { GET_USER_SUCCESS, GET_USER_ERROR } from './types';

const getUserSuccess = user => ({
    type: GET_USER_SUCCESS,
    payload: {
        user,
    },
});

const getUserError = error => ({
    type: GET_USER_ERROR,
    payload: {
        error,
    },
});

export const getUser = ( url)  => async ( url,dispatch) => {
        console.log(url)
        const user = await fetch(`${url}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
        });
        const details = await user.json();
        console.log(details)
        // dispatch(getUserSuccess(details));
    // catch (e) {
    //     console.log(e);
    //     console.error(e);
    //     dispatch(getUserError(e));
    // }
};
