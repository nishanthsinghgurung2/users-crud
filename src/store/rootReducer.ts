import { combineReducers } from "redux";

import usersListReducer from "./usersList/reducer";
import createdUserReducer from "./createUser/reducer";
import fetchedUserReducer from "./fetchUser/reducer";
import editedUserReducer from "./editUser/reducer";
import deletedUserReducer from "./deleteUser/reducer";

const rootReducer = combineReducers({
    usersList: usersListReducer,
    createdUserInfo: createdUserReducer,
    fetchedUserInfo: fetchedUserReducer,
    editedUserInfo: editedUserReducer,
    deletedUserInfo: deletedUserReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;