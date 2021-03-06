import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.createdUserInfo['pending'];

const getUserInfo = (state: AppState) => state.createdUserInfo['userInfo'];

const getError = (state: AppState) => state.createdUserInfo['error'];

export const getUserInfoSelector = createSelector(getUserInfo, (userInfo) => userInfo);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);