import React, { useState } from "react";

const Form = ({ callback }) => {
  const [formInfo, setInfo] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setInfo(value);
  };

  const handleSubmit = (event) => {
    callback(formInfo, event);
    setInfo("");
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="wish">Write your wish</label>
      <input
        type="text"
        name="wish"
        id="wish"
        required
        onChange={handleChange}
        value={formInfo}
      />
      <button type="submit">Save Wish</button>
    </form>
  );
};

export default Form;
