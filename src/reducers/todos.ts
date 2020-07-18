import { TodoAction } from "../actions/todos";
import { TodoState } from "../stores";

const initState = {
  allIds: [],
  byIds: {},
};
export function todosReducer(
  state: TodoState = initState,
  action: TodoAction
): TodoState {
  const cloneState = { ...state };
  switch (action.type) {
    case "ADD_TODO":
      const { content } = action.payload;
      const todoId = action.payload.id;
      //{...state} : copy all of state
      cloneState.allIds.push(todoId);
      cloneState.byIds[todoId] = {
        content: content,
        id: todoId,
        isCompleted: false,
      };
      return cloneState;
    case "TOGGLE_TODO":
      const toggleId = action.payload.id;
      const todoItem = cloneState.byIds[toggleId];
      cloneState.byIds[toggleId] = {
        ...todoItem,
        isCompleted: !todoItem.isCompleted,
      };
      return cloneState;
    default:
      return state;
  }
}
