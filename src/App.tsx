import React, { ReactNode } from "react";
import "./App.css";
import { VisibilityFilter, TodoList, AddTodoForm } from "./components";
interface State {}
interface Props {}
export class App extends React.Component<Props, State> {
  render(): ReactNode {
    return (
      <div>
        <AddTodoForm />
        <VisibilityFilter />
        <TodoList />
      </div>
    );
  }
}
export default App;
