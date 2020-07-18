import { SET_FILTER } from "./actionTypes";
import { FilterType } from "../constants/types";
export interface SetFilter {
  type: SET_FILTER;
  payload: {
    filter: FilterType;
  };
}
export function setFilter(filter: FilterType): SetFilter {
  return {
    type: SET_FILTER,
    payload: {
      filter,
    },
  };
}

export type FilterAction = SetFilter;
