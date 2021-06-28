import { 
    FETCH_USERS_LIST_REQUEST,
    FETCH_USERS_LIST_SUCCESS,
    FETCH_USERS_LIST_FAILURE,
} from "./actionTypes";

import { 
    FetchUsersListRequest,
    FetchUsersListSuccess,
    FetchUsersListFailure,
    FetchUsersListSuccessPayload,
    FetchUsersListFailurePayload
} from "./types";

export const fetchUsersListRequest = (): FetchUsersListRequest => ({
    type: FETCH_USERS_LIST_REQUEST
});

export const fetchUsersListSuccess = ( payload: FetchUsersListSuccessPayload ): FetchUsersListSuccess => ({
    type: FETCH_USERS_LIST_SUCCESS,
    payload
});

export const fetchUsersListFailure = (payload: FetchUsersListFailurePayload): FetchUsersListFailure => ({
    type: FETCH_USERS_LIST_FAILURE,
    payload
});