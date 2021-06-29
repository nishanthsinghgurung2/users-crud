import { IUser } from '../usersList/types';
import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
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
        case CREATE_USER_REQUEST:
            return { ...state, pending: true };
        case CREATE_USER_SUCCESS:
            return { ...state, pending: false, userInfo: action.payload };
        case CREATE_USER_FAILURE:
            return { ...state, pending: false, userInfo: {}, error: action.payload.error }
        default:
            return { ...state };
    }
};