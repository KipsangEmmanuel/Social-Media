import React from "react";
import './Input.scss'
const Input = ({inputMsg}) => {
  return (
    <div className="input">
      <input
        className="input-text"
        type="text"
        placeholder={inputMsg}
      />
    </div>
  );
};

export default Input;
