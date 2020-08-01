import React, { ReactNode } from "react";

interface Props {
  onClick?: () => void;
  isCompleted?: boolean;
  text: string;
}

export class Todo extends React.Component<Props> {
  render(): ReactNode {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.isCompleted ? "line-through" : "none",
        }}
      >
        {this.props.text}
      </li>
    );
  }
}
