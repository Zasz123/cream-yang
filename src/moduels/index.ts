import { combineReducers } from "redux";
import item from "./currentItem";

const rootReducer = combineReducers({
  item,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
