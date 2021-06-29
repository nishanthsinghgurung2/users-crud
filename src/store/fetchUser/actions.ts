import { IUser } from "../usersList/types";
import { 
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from "./actionTypes";

import { 
    FetchUserRequest,
    FetchUserSuccess,
    FetchUserFailurePayload,
    FetchUserFailure
} from "./types";

export const fetchUserRequest = (payload: { id: number}): FetchUserRequest => ({
    type: FETCH_USER_REQUEST,
    payload
});

export const fetchUserSuccess = ( payload: IUser ): FetchUserSuccess => ({
    type: FETCH_USER_SUCCESS,
    payload
});

export const fetchUserFailure = (payload: FetchUserFailurePayload): FetchUserFailure => ({
    type: FETCH_USER_FAILURE,
    payload
});