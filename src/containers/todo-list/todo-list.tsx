import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { toggleTodo } from "../../actions/todos";
import { Store } from "../../stores";
import { TodoList } from "../../components/todo-list";
import { Todo } from "../../components/todo";
const mapDispatchToProps = {
  onClickItem: toggleTodo,
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

// type ConnectorType = ConnectedProps<typeof connector>;

// type Props = ConnectorType & {};
export default connector(TodoList);