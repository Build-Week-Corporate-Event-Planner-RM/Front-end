import { combineReducers } from "redux";

import eventsReducer from "./eventsReducer";
import todoReducer from "./todoReducer";
import vendorReducer from "./vendorReducer";

export const rootReducer = combineReducers({
  eventsReducer,
  todoReducer,
  vendorReducer
});
