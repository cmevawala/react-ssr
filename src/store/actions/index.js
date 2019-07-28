import axios from 'axios';

export const GET_USERS = 'GET_USERS';

export const fetchUsers = () => async dispatch => {
    const users = await axios.get('https://react-ssr-api.herokuapp.com/users');

    dispatch({
        type: GET_USERS,
        payload: users
    });
}