import { IUser } from "../usersList/types";
import { 
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE
} from "./actionTypes";

import { 
    CreateUserRequest,
    CreateUserSuccess,
    CreateUserFailure,
    CreateUserFailurePayload,
} from "./types";

export const createUserRequest = (payload: IUser): CreateUserRequest => ({
    type: CREATE_USER_REQUEST,
    payload
});

export const createUserSuccess = ( payload: IUser ): CreateUserSuccess => ({
    type: CREATE_USER_SUCCESS,
    payload
});

export const createUserFailure = (payload: CreateUserFailurePayload): CreateUserFailure => ({
    type: CREATE_USER_FAILURE,
    payload
});