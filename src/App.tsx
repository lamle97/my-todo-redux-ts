import React, { ReactNode } from "react";
import "./App.css";
import { AddTodo, TodoList, VisibilityFilter } from "./containers";
interface State {}
interface Props {}
export class App extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <VisibilityFilter />
      </div>
    );
  }
}

export default App;
