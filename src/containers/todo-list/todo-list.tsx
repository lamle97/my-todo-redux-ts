import { connect, ConnectedProps } from "react-redux";
import { toggleTodo } from "../../actions/todos";

import { Store } from "../../stores";
import { TodoList } from "../../components/todo-list";
import { FilterType } from "../../constants/types";

//import { Todo } from "../../components/todo";
const mapDispatchToProps = {
  //Binding onClickItem action to todoList presentation component
  onTodoClick: toggleTodo,
};

const mapStateToProps = (store: Store) => {
  const { todos, visibilityFilters } = store;
  const { byIds } = todos;

  //Get all keys of Map
  const keys = Object.keys;
  //Convert Object to Array to Render on React
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

  // filter todo item by visibility filter type
  const filteredTodo = todoList.filter(
    (todo: { content: string; id: number; isCompleted: boolean }): boolean => {
      switch (visibilityFilters) {
        case FilterType.ALL:
          return true;
        case FilterType.COMPLETED:
          return todo.isCompleted;
        case FilterType.INCOMPLETED:
          return !todo.isCompleted;
        default:
          return true;
      }
    }
  );
  return {
    todos: filteredTodo,
    filter: visibilityFilters,
  };
};
//mapStateToProps returen todo list
const connector = connect(mapStateToProps, mapDispatchToProps);

type ConnectorType = ConnectedProps<typeof connector>;

type Props = ConnectorType & {};
export default connector(TodoList);
