import { FETCH_USERS_LIST_REQUEST, FETCH_USERS_LIST_SUCCESS, FETCH_USERS_LIST_FAILURE } from './actionTypes';

export interface IUser {
    id?: number;
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

export interface FetchUsersListSuccessPayload {
    users: IUser[];
}

export interface FetchUsersListFailurePayload {
    error: string;
}

export interface FetchUsersListRequest {
    type: typeof FETCH_USERS_LIST_REQUEST;
}

export type FetchUsersListSuccess = {
    type: typeof FETCH_USERS_LIST_SUCCESS;
    payload: FetchUsersListSuccessPayload;
};

export type FetchUsersListFailure = {
    type: typeof FETCH_USERS_LIST_FAILURE;
    payload: FetchUsersListFailurePayload;
};


export type UsersListActions =
    | FetchUsersListRequest
    | FetchUsersListSuccess
    | FetchUsersListFailure;