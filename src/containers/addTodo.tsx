import React, { ReactNode } from "react";
import { connect, ConnectedProps } from "react-redux";
import { addTodo } from "../../actions/todos";

const mapDispatchToProps = {
  addTodo,
};
const mapStateToProps = (): void => {};

const connector = connect(mapStateToProps, mapDispatchToProps);
type ConnectorType = ConnectedProps<typeof connector>;
type Props = ConnectorType & {
  text: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
};
class AddTodo extends React.Component<Props> {
  handleAddTodo = () => {
    // dispatches actions to add todo
    this.props.addTodo("new Item");
    // sets state back to empty string
  };
  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { onChangeText } = this.props;
    if (onChangeText) {
      onChangeText(e.target.value);
    }
  };
  render(): ReactNode {
    const { text, placeholder } = this.props;
    return (
      <div>
        <input
          name={text}
          placeholder={placeholder}
          onChange={this.handleOnChange}
        ></input>
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}
export default connector(AddTodo);
