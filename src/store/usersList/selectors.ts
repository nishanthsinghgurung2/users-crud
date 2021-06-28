import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.usersList.pending;

const getUsers = (state: AppState) => state.usersList.users;

const getError = (state: AppState) => state.usersList.error;

export const getUsersSelector = createSelector(getUsers, (users) => users);

export const getPendingSelector = createSelector(getPending, (pending) => pending);

export const getErrorSelector = createSelector(getError, (error) => error);