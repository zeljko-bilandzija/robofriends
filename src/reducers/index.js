import * as actionTypes from '../constants';

const searchInitialState = {
    searchField: ''
};

export const searchRobotsReducer = (state = searchInitialState, action = {}) => {
    switch(action.type) {
        case actionTypes.CHANGE_SEARCHFIELD:
            return {...state, searchField: action.payload};
            // return Object.assign({}, state, { searchField: action.payload }); 
        default:
            return state;
    }
};

const requestInitialState = {
    isPending: false,
    robots: [],
    error: null
}

export const requestRobotsReducer = (state = requestInitialState, action= {}) => {
    switch (action.type) {
        case actionTypes.REQUEST_ROBOTS_PENDING:
            return {...state, isPending: true};
        case actionTypes.REQUEST_ROBOTS_SUCCESS:
            return {...state, robots: action.payload, isPending: false};
        case actionTypes.REQUEST_ROBOTS_FAIL:
            return {...state, error: action.payload, isPending: false };
        default:
            return state;
    }
}