import * as constants from '../constants';
import { apiCall } from '../api';

export const setSearchField = text => ({
    type: constants.CHANGE_SEARCHFIELD,
    payload: text
});

// export const requestRobots = dispatch => { BEFORE THUNK
export const requestRobots = () => dispatch => {
    dispatch({type: constants.REQUEST_ROBOTS_PENDING});
    apiCall('https://jsonplaceholder.typicode.com/users')
        .then(users => dispatch({type: constants.REQUEST_ROBOTS_SUCCESS, payload: users}))
        .catch(err => dispatch({type: constants.REQUEST_ROBOTS_FAIL, payload: err}));
}