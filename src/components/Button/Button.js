import React from "react";

const Button = ({ callback }) => {
  return (
    <button type="submit" onClick={(event) => callback(event)}>
      Remove
    </button>
  );
};

export default Button;
