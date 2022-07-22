import * as React from "react";
import { Checkbox } from "../checkbox/checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.css";

export const TodoList = () => {
  const { todos, setTodos } = React.useContext(TodosContext);

  const handleDelete = (id) => {
    // Fix an ability to delete task
    setTodos((old) => {

      return old.filter((arr, ind) => {
        return arr.id !== id;
      })
    })

  };

  const toggleCheck = (id, status) => {
    // Fix an ability to toggle task


    setTodos(todos.map(t => t.id === id ? { ...t, complete: status } : t))



  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">To Do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem, index) => (
            <Checkbox
              key={todoItem.id}
              id={index}
              label={todoItem.task}
              checked={todoItem.complete}
              onClick={(e) => {

                toggleCheck(todoItem.id, e.target.checked)
              }}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
