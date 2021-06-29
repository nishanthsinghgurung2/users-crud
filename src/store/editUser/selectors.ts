import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.editedUserInfo['pending'];

const getUserInfo = (state: AppState) => state.editedUserInfo['userInfo'];

const getError = (state: AppState) => state.editedUserInfo['error'];

export const getUserInfoSelector = createSelector(getUserInfo, (userInfo) => userInfo);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);