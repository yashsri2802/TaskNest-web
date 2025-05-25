import { useState } from "react";
import "./Todo.css";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";
import { getLocalStorageData, setLocalStorageData } from "./TodoLocStorage";

export const Todo = () => {
  const [task, setTask] = useState(() => getLocalStorageData());

  const handleFormSubmit = (InputValue) => {
    const { id, content, checked } = InputValue; //destructuring the InputValue object to get id, content and checked properties.

    if (!content) return; //if content is empty(user data), then return nothing (don't store data).
    const ifTodoContentMatched = task.find(
      (curTask) => curTask.content === content
    );
    if (ifTodoContentMatched) return;
    //if task array already includes the InputValue, then return nothing (don't store data).
    setTask((prevState) => [...prevState, { id, content, checked }]); //...prevState(spread operator) is used to store the previous value of state and add new value to it.
  };

  //add localStorage functionality to store tasks
  setLocalStorageData(task);

  // Function to handle task deletion
  const handleDeleteTask = (value) => {
    const updatedTasks = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTasks);
  };

  // Function to clear all tasks
  const handleClearAll = () => {
    setTask([]); // Clear all tasks by setting the task state to an empty array
  };

  // Function to handle task completion (checked state)
  const handleCheckedTask = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return {
          ...curTask,
          checked: !curTask.checked,
        };
      } else {
        return curTask; // the remaining tasks remain unchanged
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>TaskNest - Your Personalised Todo App</h1>
        <TodoDate />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul className="todo-list">
          {task.map((curTask) => {
            return (
              <TodoList
                key={curTask.id}
                data={curTask.content}
                checked={curTask.checked}
                onhandleDeleteTask={handleDeleteTask}
                onhandleCheckedTask={handleCheckedTask}
              />
            );
          })}
        </ul>
      </section>
      <section className="clear-btn" onClick={handleClearAll}>
        Clear All
      </section>
      <footer className="footer">
        <p className="instr">INSTRUCTIONS:</p>
        <div className="footer-content">
          <p>1. Click ✅ to mark a task as completed.</p>
          <p>2. Click 🗑️ to Delete a task.</p>
          <p>3. Click "Clear All" to remove all tasks.</p>
        </div>
      </footer>
    </section>
  );
};
