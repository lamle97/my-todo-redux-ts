import React, { ReactNode } from "react";

interface Props {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onSubmit?: (text: string) => void;
}

export class AddTodoForm extends React.Component<Props> {
  state = {
    text: "",
  };
  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { onChangeText } = this.props;
    const text = e.target.value;
    if (onChangeText) {
      onChangeText(e.target.value);
    }
    this.setState({ text });
  };
  handleOnSubmit = (): void => {
    const { onSubmit } = this.props;
    const { text } = this.state;
    if (onSubmit) {
      onSubmit(text);
    }

    // reset text input
    this.setState({ text: "" });
  };
  render(): ReactNode {
    const { placeholder } = this.props;
    const { text } = this.state;
    return (
      <div>
        <input
          placeholder={placeholder}
          value={text}
          onChange={this.handleOnChange}
        />
        <button className="button" onClick={this.handleOnSubmit}>
          ADD
        </button>
      </div>
    );
  }
}
