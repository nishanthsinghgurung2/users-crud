import { IUser } from '../usersList/types';
import {
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
} from './actionTypes';

import { UserActions, UserState } from './types';

const initialState: UserState = {
    pending: false,
    userInfo: {} as IUser,
    error: null
};

export default (state = initialState, action: UserActions) => {
    switch(action.type) {
        case CREATE_USER_REQUEST:
            return { ...state, pending: true };
        case CREATE_USER_SUCCESS:
            return { ...state, pending: false, userInfo: action.payload.userInfo };
        case CREATE_USER_FAILURE:
            return { ...state, pending: false, userInfo: {}, error: action.payload.error }
        default:
            return { ...state };
    }
};