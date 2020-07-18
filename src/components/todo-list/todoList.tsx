import React, { ReactNode } from "react";
import { connect, ConnectedProps } from "react-redux";
import { toggleTodo } from "../../actions/todos";
import { Store } from "../../stores";
const mapDispatchToProps = {
  toggleTodo,
};
const mapStateToProps = (store: Store) => {
  const { todos } = store;
  const { byIds } = todos;
  //Get all keys of Map
  const keys = Object.keys;
  //Conver Object to Array to Render on React
  //Object.keys => return all key on Object
  const mapKeyToValue = (
    key: string
  ): {
    content: string;
    id: number;
    isCompleted: boolean;
  } => {
    //+key => convert string to number
    return byIds[+key];
  };
  const todoList = keys(byIds).map(mapKeyToValue);
  return {
    todos: todoList,
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ConnectorType = ConnectedProps<typeof connector>;

type Props = ConnectorType & {};
class TodoList extends React.Component<Props> {
  renderTodo(): ReactNode {
    return this.props.todos.map(
      (item: {
        content: string;
        id: number;
        isCompleted: boolean;
      }): ReactNode => {
        return <div>{item.content}</div>;
      }
    );
  }
  render(): ReactNode {
    const { todos } = this.props;
    return <div>{this.renderTodo()}</div>;
  }
}
export default connector(TodoList);
