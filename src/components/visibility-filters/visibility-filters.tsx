import React, { ReactNode } from "react";
import { FilterType } from "../../constants/types";

interface Props {
  filter: FilterType;
  setFilter?: (status: FilterType) => void;
}
export class VisibilityFilter extends React.Component<Props> {
  setFilterAll = () => {
    const { setFilter } = this.props;
    setFilter && setFilter(FilterType.ALL);
  };
  setFilterIncomplete = () => {
    const { setFilter } = this.props;
    setFilter && setFilter(FilterType.INCOMPLETED);
  };
  setFilterCompleted = () => {
    const { setFilter } = this.props;
    setFilter && setFilter(FilterType.COMPLETED);
  };

  render(): ReactNode {
    const { filter } = this.props;
    return (
      <p>
        Show:{" "}
        {filter === FilterType.ALL ? (
          <span>All</span>
        ) : (
          <button onClick={this.setFilterAll}>ALL</button>
        )}{" "}
        {filter === FilterType.INCOMPLETED ? (
          <span>Incomplete</span>
        ) : (
          <button onClick={this.setFilterIncomplete}>INCOMPLETE</button>
        )}{" "}
        {filter === FilterType.COMPLETED ? (
          <span>Completed</span>
        ) : (
          <button onClick={this.setFilterCompleted}>COMPLETED</button>
        )}
      </p>
    );
  }
}
