import * as React from "react";
import "./checkbox.css";

export const Checkbox = ({ onClick, checked, onDelete, label, onKeyUp, id }) => (
  <div className="checkbox">
    <div

      tabIndex="0"
      role="checkbox"
      aria-checked
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <input
        id={id}
        tabIndex="-1"

        type="checkbox"
        checked={checked}
        onChange={onClick}
      />
      <label htmlFor={id}><span className={checked ? "checkbox-checked" : " "}>{label}</span></label>
    </div>
    <button type="button" className="checkbox-delete" onClick={onDelete}>
      x
    </button>
  </div>
);
