import { combineReducers } from "redux";
import { countSliceReducer } from "./count";

export const reducers = combineReducers({
  countSliceReducer,
});
