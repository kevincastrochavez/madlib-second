import React from "react";

function Input({ title }) {
  return (
    <div className="input">
      <input type="text" placeholder="Hi" />
      <label>{title}</label>
    </div>
  );
}

export default Input;
