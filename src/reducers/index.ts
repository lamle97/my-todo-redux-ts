import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { visibilityFilter } from "./visibility-filters";

export const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter,
});
