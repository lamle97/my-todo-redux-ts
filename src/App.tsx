import React, { ReactNode } from "react";
import "./App.css";
import { VisibilityFilter, TodoList } from "./components";
import AddTodoContainer from "./containers/addTodo";

export class App extends React.Component {
  render(): ReactNode {
    return (
      <div>
        <AddTodoContainer />
        <VisibilityFilter />
        <TodoList />
      </div>
    );
  }
}
export default App;
