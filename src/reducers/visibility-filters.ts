import { FilterAction } from "../actions/visibility-filters";
import { FilterState } from "../stores";
import { FilterType } from "../constants/types";

const initState = FilterType.ALL;

export function visibilityFilters(
	state = initState,
	action: FilterAction
): FilterState {
	switch (action.type) {
		case "SET_FILTER":
			return action.payload.filter;
		default:
			return state;
	}
}
