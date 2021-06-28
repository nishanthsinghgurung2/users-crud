import { combineReducers } from "redux";

import usersListReducer from "./usersList/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
    usersList: usersListReducer,
    userInfo: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;