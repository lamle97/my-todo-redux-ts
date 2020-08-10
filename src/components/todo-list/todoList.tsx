import React, { ReactNode } from "react";
import { Todo } from "../todo";
export interface TodoType {
  id: number;
  content: string;
  isCompleted: boolean;
}
interface Props {
  todos: TodoType[];
  onTodoClick?: (todo: TodoType) => void;
}

export class TodoList extends React.Component<Props> {
  state = {
    todos: [],
  };
  handleClickItem = (todo: TodoType): void => {
    const { onTodoClick } = this.props;
    onTodoClick && onTodoClick(todo);
  };

  renderTodos(): ReactNode {
    const { todos } = this.props;
    return todos.map(
      (todo: TodoType): ReactNode => {
        return (
          <div key={`${"todoitem" + todo.id}`}>
            <Todo
              onClick={(): void => {
                this.handleClickItem(todo);
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
