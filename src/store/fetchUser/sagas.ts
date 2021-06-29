import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { IUser } from "../usersList/types";

import { fetchUserFailure, fetchUserSuccess} from "./actions";
import { FETCH_USER_REQUEST } from "./actionTypes";
import { FetchUserRequest, FetchUserResponse } from "./types";

const fetchUser = (action: FetchUserRequest): any =>
    axios.get<IUser>(`https://reqres.in/api/users/${action.payload.id}`);

function* fetchUserSaga(action: FetchUserRequest) {
    try {
        const response: FetchUserResponse = yield call(fetchUser, action);
        yield put(
            fetchUserSuccess(response.data.data)
        );
    } catch (e) {
        yield put(
            fetchUserFailure({
                error: e.message
            })
        );
    }
}

function* fetchUserInfoSaga(){
    yield all([
        takeLatest(FETCH_USER_REQUEST, fetchUserSaga)
    ]);
}

export default fetchUserInfoSaga;