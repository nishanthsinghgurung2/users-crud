import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IUser } from "../usersList/types";

import { editUserFailure, editUserSuccess } from "./actions";
import { EDIT_USER_REQUEST } from "./actionTypes";
import { EditUserRequest } from "./types";

const editUser = (action: EditUserRequest): any =>
    axios.patch<IUser>("https://reqres.in/api/users", action.payload);

function* editUserSaga(action: EditUserRequest) {
    try {
        const response: IUser = yield call(editUser, action);
        yield put(
            editUserSuccess(response)
        );
    } catch (e) {
        yield put(
            editUserFailure({
                error: e.message
            })
        );
    }
}

function* editUserInfoSaga(){
    yield all([
        takeLatest(EDIT_USER_REQUEST, editUserSaga)
    ]);
}

export default editUserInfoSaga;