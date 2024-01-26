import { userReducer } from "./user";
import { countReducer } from "./count";
import { combineReducers } from "redux";

export default combineReducers({
  user: userReducer,
  count: countReducer,
});
