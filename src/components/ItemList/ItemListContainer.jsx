import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const filteredProds = products.filter((prod) => prod.category === category);

    const itemRequest = new Promise((resolve, reject) => {
      resolve(category ? filteredProds : products);
    });

    itemRequest
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [category]);

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

export default ItemListContainer;
