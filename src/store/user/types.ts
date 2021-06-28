import { FetchUserFailurePayload, IUser } from '../usersList/types';
import { 
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE 
} from './actionTypes';

export interface UserState {
    pending: boolean;
    userInfo: IUser;
    error: string | null;
}

export type CreateUserPayload = IUser;

export type CreateUserSuccessPayload = IUser & {
    createdAt: Date;
}

export type CreateUserFailurePayload = FetchUserFailurePayload;

export interface CreateUserRequest {
    type: typeof CREATE_USER_REQUEST;
    payload: CreateUserPayload;
}

export type UpdateUserSuccessPayload = IUser & {
    updatedAt: Date;
}

export type UpdateUserFailurePayload = FetchUserFailurePayload;

export interface UpdateUserRequest {
    type: typeof UPDATE_USER_REQUEST;
}

export interface DeleteUserSuccessPayload {
    userDeleted: boolean;
}

export type DeleteUserFailurePayload = FetchUserFailurePayload;

export interface DeleteUserRequest {
    type: typeof DELETE_USER_REQUEST;
}

export type CreateUserSuccess = {
    type: typeof CREATE_USER_SUCCESS;
    payload: CreateUserSuccessPayload;
};

export type CreateUserFailure = {
    type: typeof CREATE_USER_FAILURE;
    payload: CreateUserFailurePayload;
};

export type UpdateUserSuccess = {
    type: typeof UPDATE_USER_SUCCESS;
    payload: UpdateUserSuccessPayload;
};

export type UpdateUserFailure = {
    type: typeof UPDATE_USER_FAILURE;
    payload: UpdateUserFailurePayload;
};

export type DeleteUserSuccess = {
    type: typeof DELETE_USER_SUCCESS;
    payload: DeleteUserSuccessPayload;
};

export type DeleteUserFailure = {
    type: typeof DELETE_USER_FAILURE;
    payload: DeleteUserFailurePayload;
};

export type UserActions =
    | CreateUserRequest
    | CreateUserSuccess
    | CreateUserFailure
    | UpdateUserRequest
    | UpdateUserSuccess
    | UpdateUserFailure
    | DeleteUserRequest
    | DeleteUserSuccess
    | DeleteUserFailure;