import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  useEffect(() => {
    document.title = product.title + " | BEYOND IMAGINATION";
  }, [product.title]);

  useEffect(() => {
    let found = products.find((prod) => prod.id === Number(id));
    setProduct(found);
  }, [id]);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
