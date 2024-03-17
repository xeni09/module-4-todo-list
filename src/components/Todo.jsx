import React from 'react';
import { EditTodoForm } from './EditTodoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import PropTypes from 'prop-types';

import './Todo.css';

const colors = {
  primary: '#0a9396',
  secondary: '#136466',
};

export const Todo = ({task, toggleComplete, deleteTodo, editTodo, editTask}) => {
  const [bgColor, setBgColor] = React.useState(colors.primary);

  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({
    id: task.id,
    disabled: task.isEditing,
  });


  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    backgroundColor: bgColor,
  };

  const handleToggleComplete = () => {
    toggleComplete(task.id);
    setBgColor(bgColor === colors.primary ? colors.secondary : colors.primary);
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    editTodo(task.id);
  };

  const handleDelete = (e) => {
    e.stopPropagation(); // Stop event propagation
    deleteTodo(task.id);
  };

  if (task.isEditing) {
    return  (<EditTodoForm editTodo={editTask} task={task}/>);
  }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='Todo'>
      <FontAwesomeIcon  className='circle-icon'
  icon={task.completed ? faCheckCircle : faCircle}
  onMouseDown={handleToggleComplete}
/>
        <p className={`${task.completed ? 'completed': ""}`}>{task.task}</p>
        <div className='icon-container'>

        <FontAwesomeIcon icon={faPenToSquare}
        onMouseDown={handleEdit}
        style={{ pointerEvents: 'auto' }}

        />
<FontAwesomeIcon icon={faTrash}
  onMouseDown={handleDelete}
/>
        </div>
      </div>
  );
};

Todo.PropTypes = {
  task: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};
