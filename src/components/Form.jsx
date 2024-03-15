import { useState } from "react";
import PropTypes from "prop-types";

import "./TodoForm.css";

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
};

export function Form({ onSubmit, initialValue, placeholder, buttonText }) {
  const [value, setValue] = useState(initialValue || "");
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      onSubmit(value);
      setValue("");
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className={`todo-input ${hasError && "todo-input-error"}`}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
          setHasError(false);
        }}
      />

      <button type="submit" className="todo-btn">
        {buttonText}
      </button>
    </form>
  );
}
