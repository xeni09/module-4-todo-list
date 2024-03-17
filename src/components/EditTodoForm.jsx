import { Form } from "./Form";
import PropTypes from "prop-types";

export const EditTodoForm = ({ editTodo, task }) => {
  return (
    <Form
      onSubmit={(v) => editTodo(v, task.id)}
      initialValue={task.task}
      buttonText="Update Task"
    />
  );
};

EditTodoForm.propTypes = {
  editTodo: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
};
