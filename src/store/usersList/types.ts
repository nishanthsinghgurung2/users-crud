import { FETCH_USERS_LIST_REQUEST, FETCH_USERS_LIST_SUCCESS, FETCH_USERS_LIST_FAILURE } from './actionTypes';

export interface IUser {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IUserList {
    data: {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: IUser[];
        support: {
            url: string;
            text: string;
        }
    }
}

export interface UsersListState {
    pending: boolean;
    users: IUser[];
    error: string | null;
}

export interface FetchUserSuccessPayload {
    users: IUser[];
}

export interface FetchUserFailurePayload {
    error: string;
}

export interface FetchUserRequest {
    type: typeof FETCH_USERS_LIST_REQUEST;
}

export type FetchUserSuccess = {
    type: typeof FETCH_USERS_LIST_SUCCESS;
    payload: FetchUserSuccessPayload;
};

export type FetchUserFailure = {
    type: typeof FETCH_USERS_LIST_FAILURE;
    payload: FetchUserFailurePayload;
};


export type UsersListActions =
    | FetchUserRequest
    | FetchUserSuccess
    | FetchUserFailure;