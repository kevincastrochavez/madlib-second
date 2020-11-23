import React from "react";

function Input({ title, state, onChange, name }) {
  return (
    <div className="input">
      <input name={name} value={state} onChange={onChange} type="text" />
      <label>{title}</label>
    </div>
  );
}

export default Input;
