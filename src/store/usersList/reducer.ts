import {
    FETCH_USERS_LIST_REQUEST,
    FETCH_USERS_LIST_SUCCESS,
    FETCH_USERS_LIST_FAILURE
} from './actionTypes';

import { UsersListActions, UsersListState } from './types';

const initialState: UsersListState = {
    pending: false,
    users: [],
    error: null
};

export default (state = initialState, action: UsersListActions) => {
    switch(action.type) {
        case FETCH_USERS_LIST_REQUEST:
            return { ...state, pending: true };
        case FETCH_USERS_LIST_SUCCESS:
            return { ...state, pending: false, users: action.payload.users };
        case FETCH_USERS_LIST_FAILURE:
            return { ...state, pending: false, users: [], error: action.payload.error }
        default:
            return { ...state };
    }
};