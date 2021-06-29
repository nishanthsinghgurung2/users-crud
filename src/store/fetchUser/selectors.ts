import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.fetchedUserInfo['pending'];

const getUserInfo = (state: AppState) => state.fetchedUserInfo['userInfo'];

const getError = (state: AppState) => state.fetchedUserInfo['error'];

export const getUserInfoSelector = createSelector(getUserInfo, (userInfo) => userInfo);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);