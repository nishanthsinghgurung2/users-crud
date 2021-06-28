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
} from "./actionTypes";

import { 
    CreateUserRequest,
    CreateUserSuccess,
    CreateUserFailure,
    CreateUserSuccessPayload,
    CreateUserFailurePayload,
    UpdateUserRequest,
    UpdateUserSuccess,
    UpdateUserFailure,
    UpdateUserSuccessPayload,
    UpdateUserFailurePayload,
    DeleteUserRequest,
    DeleteUserSuccess,
    DeleteUserFailure,
    DeleteUserSuccessPayload,
    DeleteUserFailurePayload,
    CreateUserPayload,
    
} from "./types";

export const createUserRequest = (payload: CreateUserPayload): CreateUserRequest => ({
    type: CREATE_USER_REQUEST,
    payload
});

export const createUserSuccess = ( payload: CreateUserSuccessPayload ): CreateUserSuccess => ({
    type: CREATE_USER_SUCCESS,
    payload
});

export const createUserFailure = (payload: CreateUserFailurePayload): CreateUserFailure => ({
    type: CREATE_USER_FAILURE,
    payload
});

export const updateUserRequest = (): UpdateUserRequest => ({
    type: UPDATE_USER_REQUEST
});

export const updateUserSuccess = ( payload: UpdateUserSuccessPayload ): UpdateUserSuccess => ({
    type: UPDATE_USER_SUCCESS,
    payload
});

export const updateUserFailure = (payload: UpdateUserFailurePayload): UpdateUserFailure => ({
    type: UPDATE_USER_FAILURE,
    payload
});

export const deleteUserRequest = (): DeleteUserRequest => ({
    type: DELETE_USER_REQUEST
});

export const deleteUserSuccess = ( payload: DeleteUserSuccessPayload ): DeleteUserSuccess => ({
    type: DELETE_USER_SUCCESS,
    payload
});

export const deleteUserFailure = (payload: DeleteUserFailurePayload): DeleteUserFailure => ({
    type: DELETE_USER_FAILURE,
    payload
});