import {
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE
} from './actionTypes';

import { DeleteUserActions, DeletedUserState } from './types';

export const initialUserState: DeletedUserState = {
    pending: false,
    userDeleted: false,
    error: null
};

export default (state = initialUserState, action: DeleteUserActions) => {
    switch(action.type) {
        case DELETE_USER_REQUEST:
            return { ...state, pending: true };
        case DELETE_USER_SUCCESS:
            return { ...state, pending: false, userDeleted: action.payload };
        case DELETE_USER_FAILURE:
            return { ...state, pending: false, userInfo: {}, error: action.payload.error }
        default:
            return { ...state };
    }
};