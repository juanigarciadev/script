import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ stock }) => {
  //Logica contador
  const [quantity, setQuantity] = useState(0);

  function sumar() {
    setQuantity(quantity + 1);
  }

  function restar() {
    setQuantity(quantity - 1);
  }
  return (
    <ItemCount
      stock={stock}
      sumar={sumar}
      restar={restar}
      quantity={quantity}
    />
  );
};

export default ItemCountContainer;
