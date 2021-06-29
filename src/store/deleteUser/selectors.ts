import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.deletedUserInfo['pending'];

const getUserInfo = (state: AppState) => state.deletedUserInfo['userDeleted'];

const getError = (state: AppState) => state.deletedUserInfo['error'];

export const getDeletedUserStatusSelector = createSelector(getUserInfo, (userDeleted) => userDeleted);

export const getDeletedUserPendingSelector = createSelector(getPending, (pending) => pending);

export const getDeletedUserErrorSelector = createSelector(getError, (error) => error);