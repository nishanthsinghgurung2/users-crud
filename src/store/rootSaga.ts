import { all, fork } from "redux-saga/effects";

import usersListSaga from "./usersList/sagas";
import createUserInfoSaga from "./createUser/sagas";
import fetchUserInfoSaga from "./fetchUser/sagas";
import editUserInfoSaga from "./editUser/sagas";
import deleteUserInfoSaga from "./deleteUser/sagas";

export function* rootSaga() {
    yield all([
        fork(usersListSaga),
        fork(createUserInfoSaga),
        fork(fetchUserInfoSaga),
        fork(editUserInfoSaga),
        fork(deleteUserInfoSaga)
    ])
}