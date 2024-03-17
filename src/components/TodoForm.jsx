import { Form } from "./Form";
import PropTypes from "prop-types";

export const TodoForm = ({ addTodo }) => {
  return (
    <Form
      onSubmit={addTodo}
      placeholder="What do you need to do?"
      buttonText="Add Task"
    />
  );
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
