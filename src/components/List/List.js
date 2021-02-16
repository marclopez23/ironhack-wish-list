import React from "react";
import ListItem from "../ListItem/ListItem";

const List = ({ wishes, callback }) => {
  return (
    <section>
      {wishes.map((wish, index) => (
        <ListItem wish={wish} key={index} callback={callback} />
      ))}
    </section>
  );
};

export default List;
