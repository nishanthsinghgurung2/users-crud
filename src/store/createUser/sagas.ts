import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IUser } from "../usersList/types";

import { createUserFailure, createUserSuccess } from "./actions";
import { CREATE_USER_REQUEST } from "./actionTypes";
import { CreateUserRequest } from "./types";

const createUser = (action: CreateUserRequest): any =>
    axios.post<IUser>("https://reqres.in/api/users", action.payload);

function* createUserSaga(action: CreateUserRequest) {
    try {
        const response: IUser = yield call(createUser, action);
        yield put(
            createUserSuccess(response)
        );
    } catch (e) {
        yield put(
            createUserFailure({
                error: e.message
            })
        );
    }
}

function* createUserInfoSaga(){
    yield all([
        takeLatest(CREATE_USER_REQUEST, createUserSaga)
    ]);
}

export default createUserInfoSaga;