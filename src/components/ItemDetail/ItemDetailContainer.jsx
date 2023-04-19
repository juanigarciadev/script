import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import { useParams, useNavigate } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    let found = products.find((prod) => prod.id === Number(id));
    setProduct(found);
  }, [id]);
  return (
    <div>
      <ItemDetail history={history} product={product} />
    </div>
  );
};

export default ItemDetailContainer;
