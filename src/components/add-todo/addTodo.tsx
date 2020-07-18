import React, { ReactNode } from "react";
import { connect, ConnectedProps } from "react-redux";
import { addTodo } from "../../actions/todos";

const mapDispatchToProps = {
  addTodo,
};
const mapStateToProps = (): void => {};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ConnectorType = ConnectedProps<typeof connector>;
type Props = ConnectorType & {};
class AddTodo extends React.Component<Props> {
  handleAddTodo = () => {
    // dispatches actions to add todo
    this.props.addTodo("new Item");
    // sets state back to empty string
  };
  render(): ReactNode {
    return (
      <div>
        <input></input>
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}
export default connector(AddTodo);
