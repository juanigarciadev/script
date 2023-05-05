import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { database } from "../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  const { addToCart, cart, getQuantityById } = useContext(CartContext);

  //useEffect para cambiar el titulo de la página de manera reactiva con el nombre
  //del producto
  useEffect(() => {
    document.title =
      product.title === undefined
        ? "Loading | BEYOND IMAGINATION"
        : product.title + " | BEYOND IMAGINATION";
  }, [product.title]);

  useEffect(() => {
    const itemCollection = collection(database, "products");
    const docRef = doc(itemCollection, id);
    getDoc(docRef)
      .then((res) =>
        setProduct({
          ...res.data(),
          id: res.id,
        })
      )
      .catch((err) => console.log(err));
  }, [id]);

  const onAdd = (itemQuantity) => {
    let data = {
      ...product,
      quantity: itemQuantity,
    };
    addToCart(data);
  };

  let totalQuantity = getQuantityById(product.id);

  return (
    <div>
      <ItemDetail
        product={product}
        onAdd={onAdd}
        cart={cart}
        totalQuantity={totalQuantity}
      />
    </div>
  );
};

export default ItemDetailContainer;
