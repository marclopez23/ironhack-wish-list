import React, { useState } from "react";

import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [wishes, setWishes] = useState([]);

  const newWish = (wish) => {
    setWishes([...wishes, wish]);
  };

  const removeWish = (event, wishOut) => {
    event.preventDefault();
    const newArr = wishes.filter((wish) => wish !== wishOut);
    setWishes([...newArr]);
  };

  return (
    <main>
      <List wishes={wishes} callback={removeWish} />
      <section>
        <Form callback={newWish} />
      </section>
    </main>
  );
}

export default App;
