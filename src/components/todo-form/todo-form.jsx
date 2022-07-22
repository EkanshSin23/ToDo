import * as React from "react";
import { TodosContext } from "../../todo-context";
import "./todo-form.css";
import { v4 } from "uuid"

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    if (task == ' ' || task == '') {
      return;
    }
    else {
      setTodos([
        ...todos,
        {
          id: v4(),
          task,
          complete: false
        }
      ])
    }
    setTask(' ')
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo()
      setTask('')
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
