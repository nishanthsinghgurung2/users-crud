import { all, fork } from "redux-saga/effects";

import userSaga from "./usersList/sagas";

export function* rootSaga() {
    yield all([fork(userSaga)])
}