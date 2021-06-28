import { 
    FETCH_USERS_LIST_REQUEST,
    FETCH_USERS_LIST_SUCCESS,
    FETCH_USERS_LIST_FAILURE,
} from "./actionTypes";

import { 
    FetchUserRequest,
    FetchUserSuccess,
    FetchUserFailure,
    FetchUserSuccessPayload,
    FetchUserFailurePayload
} from "./types";

export const fetchUserRequest = (): FetchUserRequest => ({
    type: FETCH_USERS_LIST_REQUEST
});

export const fetchUserSuccess = ( payload: FetchUserSuccessPayload ): FetchUserSuccess => ({
    type: FETCH_USERS_LIST_SUCCESS,
    payload
});

export const fetchUserFailure = (payload: FetchUserFailurePayload): FetchUserFailure => ({
    type: FETCH_USERS_LIST_FAILURE,
    payload
});