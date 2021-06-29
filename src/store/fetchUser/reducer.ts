import { IUser } from '../usersList/types';
import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from './actionTypes';

import { FetchUserActions, UserState } from './types';

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

export default (state = initialUserState, action: FetchUserActions) => {
    switch(action.type) {
        case FETCH_USER_REQUEST:
            return { ...state, pending: true };
        case FETCH_USER_SUCCESS:
            return { ...state, pending: false, userInfo: action.payload };
        case FETCH_USER_FAILURE:
            return { ...state, pending: false, userInfo: {}, error: action.payload.error }
        default:
            return { ...state };
    }
};