import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchUsersListFailure, fetchUsersListSuccess } from "./actions";
import { FETCH_USERS_LIST_REQUEST } from "./actionTypes";
import { IUser, IUserList } from "./types";

const getUser = () =>
    axios.get<IUser[]>("https://reqres.in/api/users");

function* fetchUsersListSaga() {
    try {
        const response: IUserList = yield call(getUser);
        console.log('userslist...', response);
        yield put(
            fetchUsersListSuccess({ users: response.data.data })
        );
    } catch (e) {
        yield put(
            fetchUsersListFailure({
                error: e.message
            })
        );
    }
}

function* usersListSaga(){
    yield all([takeLatest(FETCH_USERS_LIST_REQUEST, fetchUsersListSaga)]);
}

export default usersListSaga;