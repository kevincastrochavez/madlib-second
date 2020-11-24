import React from "react";

function Input({ title, state, onChange, name, index }) {
  return (
    <div className="input">
      <label className={`input__number ${state == "" ? "gray" : "green"}`}>
        {index + 1}
      </label>
      <input
        placeholder={title}
        name={name}
        value={state}
        onChange={onChange}
        type="text"
      />
      <label className="input__title">{title}</label>
    </div>
  );
}

export default Input;
