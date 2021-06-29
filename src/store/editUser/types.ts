import { FetchUsersListFailurePayload, IUser } from '../usersList/types';
import { 
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE,
} from './actionTypes';

export interface UserState {
    pending: boolean;
    userInfo: IUser;
    error: string | null;
}

export type EditUserFailurePayload = FetchUsersListFailurePayload;

export interface EditUserRequest {
    type: typeof EDIT_USER_REQUEST;
    payload: IUser;
}

export type EditUserSuccess = {
    type: typeof EDIT_USER_SUCCESS;
    payload: IUser;
};

export type EditUserFailure = {
    type: typeof EDIT_USER_FAILURE;
    payload: EditUserFailurePayload;
};

export type UserActions =
    | EditUserRequest
    | EditUserSuccess
    | EditUserFailure;