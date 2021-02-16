import React from "react";
import Button from "../Button/Button";

const ListItem = ({ wish, callback }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    callback(wish);
  };
  return (
    <article className="whish">
      <div style={{ display: "flex" }}>
        <h3>{wish}</h3>
        <Button callback={handleDelete} />
      </div>
    </article>
  );
};

export default ListItem;
