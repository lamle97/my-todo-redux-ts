import { ADD_TODO, TOGGLE_TODO } from "./actionTypes";

let nextId = 0;
export interface AddTodo {
  type: ADD_TODO;
  payload: {
    id: number;
    content: string;
  };
}

export interface ToggleTodo {
  type: TOGGLE_TODO;
  payload: {
    id: number;
  };
}
export function addTodo(content: string): AddTodo {
  nextId++;
  return {
    type: ADD_TODO,
    payload: {
      id: nextId,
      content,
    },
  };
}

export function toggleTodo(id: number): ToggleTodo {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
}

export type TodoAction = AddTodo | ToggleTodo;
