import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { visibilityFilters } from "./visibility-filters";

export const rootReducer = combineReducers({
	todos: todosReducer,
	visibilityFilters,
});
