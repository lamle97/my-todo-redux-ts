import React, { ReactNode } from "react";
import "./App.css";
import { AddTodo, VisibilityFilter, TodoList } from "./components";

export class App extends React.Component {
  render(): ReactNode {
    return (
      <div>
        <AddTodo />
        <VisibilityFilter />
        <TodoList />
      </div>
    );
  }
}
export default App;
