import { FetchUsersListFailurePayload } from '../usersList/types';
import { 
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
} from './actionTypes';

export interface DeletedUserState {
    pending: boolean;
    userDeleted: boolean;
    error: string | null;
}

export type DeleteUserFailurePayload = FetchUsersListFailurePayload;

export interface DeleteUserRequest {
    type: typeof DELETE_USER_REQUEST;
    payload: { id: number};
}

export type DeleteUserSuccess = {
    type: typeof DELETE_USER_SUCCESS;
    payload: boolean;
};

export type DeleteUserFailure = {
    type: typeof DELETE_USER_FAILURE;
    payload: DeleteUserFailurePayload;
};

export type DeleteUserActions =
    | DeleteUserRequest
    | DeleteUserSuccess
    | DeleteUserFailure;