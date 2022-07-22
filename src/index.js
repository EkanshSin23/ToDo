import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import { TodosContext } from "./todo-context";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
