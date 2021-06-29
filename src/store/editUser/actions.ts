import { IUser } from "../usersList/types";
import { 
    EDIT_USER_REQUEST,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE,
} from "./actionTypes";

import { 
    EditUserRequest,
    EditUserSuccess,
    EditUserFailure,
    EditUserFailurePayload,
} from "./types";

export const editUserRequest = (payload: IUser): EditUserRequest => ({
    type: EDIT_USER_REQUEST,
    payload
});

export const editUserSuccess = ( payload: IUser ): EditUserSuccess => ({
    type: EDIT_USER_SUCCESS,
    payload
});

export const editUserFailure = (payload: EditUserFailurePayload): EditUserFailure => ({
    type: EDIT_USER_FAILURE,
    payload
});