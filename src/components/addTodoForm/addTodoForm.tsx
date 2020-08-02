import React, { ReactNode } from "react";
interface Props {
  content: string;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onSubmit?: () => void;
}

export class AddTodoForm extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { onChangeText } = this.props;
    if (onChangeText) {
      onChangeText(e.target.value);
    }
  };
  // handleClick = (e: React.DOMAttributes<HTMLButtonElement>): void => {
  //   const node = findDOMNode(this.refs.input);
  //   const content = node?.nodeValue?.trim();
  //   this.props.onAddClick(content);
  // };
  render(): ReactNode {
    const { content, placeholder, onSubmit } = this.props;
    return (
      <div>
        <input
          placeholder={placeholder}
          value={content}
          onChange={this.handleChange}
        />
        <button className="button" onClick={onSubmit}>
          Add
        </button>
      </div>
    );
  }
}
