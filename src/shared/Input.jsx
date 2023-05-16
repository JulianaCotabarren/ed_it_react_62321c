import React from "react";

const Input = (props) => {
  const { name, type = "text", value, onChange, required, disabled } = props;

  return (
    <div className="mb-3">
      <label className="form-label">{name}</label>
      <input
        type={type}
        name={name}
        disabled={disabled}
        value={value}
        required={required}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default Input;
