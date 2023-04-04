import { ItemList } from "./ItemList";
import { useState } from "react";

export const ItemListContainer = () => {
  //Saludo
  let greetings = "Hello, welcome again!";

  //Logica contador
  const [quantity, setQuantity] = useState(0);

  function sumar() {
    setQuantity(quantity + 1);
  }

  function restar() {
    setQuantity(quantity - 1);
  }
  return (
    <ItemList
      greetings={greetings}
      sumar={sumar}
      restar={restar}
      quantity={quantity}
    />
  );
};
