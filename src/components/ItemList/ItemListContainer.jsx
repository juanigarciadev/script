import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { products } from "../../productsMock";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemRequest = new Promise((resolve, reject) => {
      resolve(products);
    });

    itemRequest
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, []);

  //Logica contador
  const [quantity, setQuantity] = useState(0);

  function sumar() {
    setQuantity(quantity + 1);
  }

  function restar() {
    setQuantity(quantity - 1);
  }
  return (
    <ItemList items={items} sumar={sumar} restar={restar} quantity={quantity} />
  );
};
