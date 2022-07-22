import * as React from "react";
import "./todo-results.css";
import { TodosContext } from "../../todo-context";

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext)
  let count = 0
  const calculateChecked = () => {
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].complete) {
        count++

      }

    }
    return count

  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
