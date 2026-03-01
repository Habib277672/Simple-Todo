import React, { useState } from "react";
export const Form = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});
  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };
  return (
    <section className="form">
      <form onSubmit={(event) => handleFormSubmit(event)}>
        <div>
          <input
            className="todo-input"
            type="text"
            placeholder="Add your new todo"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button className="todo-button" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
