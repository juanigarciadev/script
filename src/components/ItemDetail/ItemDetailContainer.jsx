import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    document.title = product.title + " | BEYOND IMAGINATION";
  }, [product.title]);

  useEffect(() => {
    let found = products.find((prod) => prod.id === Number(id));
    setProduct(found);
  }, [id]);

  const onAdd = (itemQuantity) => {
    let data = {
      ...product,
      quantity: itemQuantity,
    };
    addToCart(data);
  };

  return (
    <div>
      <ItemDetail product={product} onAdd={onAdd} />
    </div>
  );
};

export default ItemDetailContainer;
