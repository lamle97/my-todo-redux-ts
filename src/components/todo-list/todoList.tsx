import React, { ReactNode } from "react";
import { Todo } from "../todo";
export interface TodoType {
  id: number;
  content: string;
  isCompleted: boolean;
}
interface Props {
  todos: TodoType[];
  onClickItem?: (item: TodoType) => void;
}

export class TodoList extends React.Component<Props> {
  state = {
    todos: [],
  };
  handleClickItem = (todo: TodoType): void => {
    const { onClickItem } = this.props;
    onClickItem && onClickItem(todo);
  };

  renderTodos(): ReactNode {
    const { todos } = this.state;
    return todos.map(
      (todo: TodoType): ReactNode => {
        return (
          <div key={`${"todoitem" + todo.id}`}>
            <Todo
              onClick={(): void => this.handleClickItem(todo)}
              text={todo.content}
              isCompleted={todo.isCompleted}
            />
          </div>
        );
      }
    );
  }
  render(): ReactNode {
    return <div>{this.renderTodos()}</div>;
  }
}
