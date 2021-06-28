import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchUserFailure, fetchUserSuccess } from "./actions";
import { FETCH_USERS_LIST_REQUEST } from "./actionTypes";
import { IUser, IUserList } from "./types";

const getUser = () =>
    axios.get<IUser[]>("https://reqres.in/api/users");

function* fetchUserSaga() {
    try {
        const response: IUserList = yield call(getUser);
        
        yield put(
            fetchUserSuccess({ users: response.data.data })
        );
    } catch (e) {
        yield put(
            fetchUserFailure({
                error: e.message
            })
        );
    }
}

function* usersListSaga(){
    yield all([takeLatest(FETCH_USERS_LIST_REQUEST, fetchUserSaga)]);
}

export default usersListSaga;