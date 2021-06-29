import { 
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
} from "./actionTypes";

import { 
    DeleteUserRequest,
    DeleteUserSuccess,
    DeleteUserFailure,
    DeleteUserFailurePayload,
} from "./types";

export const deleteUserRequest = (payload: {id: number}): DeleteUserRequest => ({
    type: DELETE_USER_REQUEST,
    payload
});

export const deleteUserSuccess = ( payload: boolean ): DeleteUserSuccess => ({
    type: DELETE_USER_SUCCESS,
    payload
});

export const deleteUserFailure = (payload: DeleteUserFailurePayload): DeleteUserFailure => ({
    type: DELETE_USER_FAILURE,
    payload
});