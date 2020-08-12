import React, { ReactNode } from "react";
import { Todo } from "../todo";
import { FilterType } from "../../constants/types";
export interface TodoType {
  id: number;
  content: string;
  isCompleted: boolean;
}
interface Props {
  todos: TodoType[];
  onTodoClick?: (id: number) => void;
  filter: FilterType;
}

export class TodoList extends React.Component<Props> {
  state = {
    todos: [],
    filter: FilterType.ALL,
  };
  handleClickItem = (id: number): void => {
    const { onTodoClick } = this.props;
    onTodoClick && onTodoClick(id);
  };

  renderTodos(): ReactNode {
    const { todos, filter } = this.props;
    let filteredList = todos;

    if (filter === FilterType.ALL) {
      filteredList = todos;
    } else if (filter === FilterType.INCOMPLETED) {
      filteredList = todos.filter((todo) => !todo.isCompleted);
    } else if (filter === FilterType.COMPLETED) {
      filteredList = todos.filter((todo) => todo.isCompleted);
    }
    return filteredList.map(
      (todo: TodoType): ReactNode => {
        return (
          <div key={`${"todoitem" + todo.id}`}>
            <Todo
              onClick={() => {
                this.handleClickItem(todo.id);
              }}
              text={todo.content}
              isCompleted={todo.isCompleted}
            />
          </div>
        );
      }
    );
  }
  render(): ReactNode {
    //const { todos } = this.state;
    return <div>{this.renderTodos()}</div>;
  }
}
