import { all, fork } from "redux-saga/effects";

import usersListSaga from "./usersList/sagas";
import userSaga from "./user/sagas";

export function* rootSaga() {
    yield all([fork(usersListSaga), fork(userSaga)])
}