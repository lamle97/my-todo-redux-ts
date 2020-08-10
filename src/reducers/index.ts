import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { visibilityFilter } from "./visibility-filters";

// Store {
//   todos: TodoState;
//   visibilityFilters: FilterState;
// }

export const rootReducer = combineReducers({
	todos: todosReducer,
	visibilityFilter,
});
