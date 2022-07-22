import * as React from "react";
import "./todo-results.css";
import { TodosContext } from "../../todo-context";

export const TodoResults = () => {
  const { done } = React.useContext(TodosContext)

  const calculateChecked = () => {


  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
