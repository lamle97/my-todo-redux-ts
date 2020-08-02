import React, { ReactNode } from "react";
import { connect, ConnectedProps } from "react-redux";
import { addTodo } from "../../actions/todos";
import { AddTodoForm } from "../../components/addTodoForm";
const mapDispatchToProps = {
  addTodo,
};
const mapStateToProps = (): void => {};
interface State {
  content: string;
}
const connector = connect(mapStateToProps, mapDispatchToProps);
type ConnectorType = ConnectedProps<typeof connector>;
type Props = ConnectorType & {};
export class AddTodo extends React.Component<Props> {
  state: State = {
    content: "",
  };
  handleAddTodo = () => {
    const { content } = this.state;
    // dispatches actions to add todo
    this.props.addTodo(content);
    // sets state back to empty string
  };
  handleChangeText = (content: string): void => {
    this.setState({ content });
  };

  render(): ReactNode {
    const { content } = this.state;
    return (
      <AddTodoForm
        placeholder="input todo item"
        onChangeText={this.handleChangeText}
        content={content}
        onSubmit={this.handleAddTodo}
      />
    );
  }
}
export default connector(AddTodo);
