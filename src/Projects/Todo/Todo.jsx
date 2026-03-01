import "./Todo.css";
import { useState, useEffect } from "react";
import { Form } from "./TodoForm";
import { List } from "./list";
import { DataAdndTime } from "./DataAndTime";
import {
  getLocalStorageTodoData,
  setLocalStorageTodoData,
} from "./TodoLocalStorage";

export const Todo = () => {
  const [tasks, setTasks] = useState(() => getLocalStorageTodoData());
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    const ifTodoContentMatches = tasks.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatches) return;

    setTasks((prevTasks) => [...prevTasks, { id, content, checked }]);
  };

  // Adding Data into Local Storage
  useEffect(() => {
    setLocalStorageTodoData(tasks);
  }, [tasks]);

  // Delete Todo
  const handleDeletetodo = (value) => {
    const updated = tasks.filter((curTask) => curTask.content !== value);
    setTasks(updated);
  };

  // Clear All Todos
  const handleClearAll = () => {
    setTasks([]);
  };

  // Check Todo
  const handleCheckTodo = (content) => {
    const updatedTask = tasks.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    });
    setTasks(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <DataAdndTime />
      </header>
      <Form onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {tasks.map((curTask) => {
            return (
              <List
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onhandleDeletetodo={handleDeletetodo}
                onhandleCheckTodo={handleCheckTodo}
              />
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearAll}>
          Clear
        </button>
      </section>
    </section>
  );
};
