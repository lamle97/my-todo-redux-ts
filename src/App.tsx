import React, { ReactNode } from "react";
import "./App.css";
import { VisibilityFilter, TodoList } from "./components";
import { AddTodo } from "./containers";
interface State {}
interface Props {}
export class App extends React.Component<Props, State> {
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
