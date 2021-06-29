import { FetchUsersListFailurePayload, IUser } from '../usersList/types';
import { 
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
} from './actionTypes';

export interface UserState {
    pending: boolean;
    userInfo: IUser;
    error: string | null;
}

export type CreateUserFailurePayload = FetchUsersListFailurePayload;

export interface CreateUserRequest {
    type: typeof CREATE_USER_REQUEST;
    payload: IUser;
}

export type FetchUserFailurePayload = FetchUsersListFailurePayload;

export type CreateUserSuccess = {
    type: typeof CREATE_USER_SUCCESS;
    payload: IUser;
};

export type CreateUserFailure = {
    type: typeof CREATE_USER_FAILURE;
    payload: CreateUserFailurePayload;
};


export type UserActions =
    | CreateUserRequest
    | CreateUserSuccess
    | CreateUserFailure;