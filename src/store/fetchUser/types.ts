import { FetchUsersListFailurePayload, IUser } from '../usersList/types';
import { 
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from './actionTypes';

export interface UserState {
    pending: boolean;
    userInfo: IUser;
    error: string | null;
}

export interface FetchUserResponse {
    data: {
        page: number;
        per_page: number;
        total: number;
        total_pages: number;
        data: IUser;
        support: {
            url: string;
            text: string;
        }
    }
}

export type FetchUserFailurePayload = FetchUsersListFailurePayload;

export interface FetchUserRequest {
    type: typeof FETCH_USER_REQUEST;
    payload: {
        id: number
    };
}

export type FetchUserSuccess = {
    type: typeof FETCH_USER_SUCCESS;
    payload: IUser;
};

export type FetchUserFailure = {
    type: typeof FETCH_USER_FAILURE;
    payload: FetchUserFailurePayload;
};

export type FetchUserActions =
    | FetchUserRequest
    | FetchUserSuccess
    | FetchUserFailure;