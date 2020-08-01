import { createStore } from "redux";
import { rootReducer } from "../reducers";
import { FilterType } from "../constants/types";

export interface TodoState {
  byIds: {
    //Define map with key,and value = another object
    [key: number]: {
      content: string;
      id: number;
      isCompleted: boolean;
    };
  };
  allIds: number[];
}
export type FilterState = FilterType;

export interface Store {
  todos: TodoState;
  visibilityFilters: FilterState;
}

export const store = createStore(
  rootReducer,
  // Using tools redux
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
