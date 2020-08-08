import React, { ReactNode } from "react";

interface Props {
  onClick?: () => void;
  isCompleted?: boolean;
  text: string;
}

export class Todo extends React.Component<Props> {
  render(): ReactNode {
    const { onClick, isCompleted, text } = this.props;
    return (
      <div
        onClick={onClick}
        style={{
          textDecoration: isCompleted ? "line-through" : "none",
        }}
      >
        {text}
      </div>
    );
  }
}
