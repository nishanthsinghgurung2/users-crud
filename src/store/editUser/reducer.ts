import { IUser } from '../usersList/types';
import {
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE
} from './actionTypes';

import { UserActions, UserState } from './types';

export const initialUserState: UserState = {
    pending: false,
    userInfo: {
        id: -1,
        email: '',
        first_name: '',
        last_name: ''
    } as IUser,
    error: null
};

export default (state = initialUserState, action: UserActions) => {
    switch(action.type) {
        case EDIT_USER_REQUEST:
            return { ...state, pending: true };
        case EDIT_USER_SUCCESS:
            return { ...state, pending: false, userInfo: action.payload };
        case EDIT_USER_FAILURE:
            return { ...state, pending: false, userInfo: {}, error: action.payload.error }
        default:
            return { ...state };
    }
};