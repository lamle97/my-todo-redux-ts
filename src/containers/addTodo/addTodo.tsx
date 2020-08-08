import { connect } from "react-redux";
import { addTodo } from "../../actions/todos";
import { AddTodoForm } from "../../components/addTodoForm";
const mapDispatchToProps = {
  //Binding addtoto action to onSubmit event
  onSubmit: addTodo,
};
const mapStateToProps = (): void => {};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(AddTodoForm);
