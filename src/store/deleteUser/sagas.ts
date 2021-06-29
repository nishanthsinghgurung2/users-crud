import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { deleteUserFailure, deleteUserSuccess } from "./actions";
import { DELETE_USER_REQUEST } from "./actionTypes";
import { DeleteUserRequest } from "./types";

const deleteUser = (action: DeleteUserRequest): any =>
    axios.delete<any>(`https://reqres.in/api/users/${action.payload.id}`)

function* deleteUserSaga(action: DeleteUserRequest) {
    try {
        const response: undefined = yield call(deleteUser, action);
        yield put(
            deleteUserSuccess(response? true: false)
        );
    } catch (e) {
        yield put(
            deleteUserFailure({
                error: e.message
            })
        );
    }
}

function* deleteUserInfoSaga(){
    yield all([
        takeLatest(DELETE_USER_REQUEST, deleteUserSaga)
    ]);
}

export default deleteUserInfoSaga;