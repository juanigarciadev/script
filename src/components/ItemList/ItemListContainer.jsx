import { ItemList } from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { database } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  //useEffect para cambiar el titulo de la página
  useEffect(() => {
    document.title = "Products | </script>";
  }, []);

  //useEffect para filtrar los productos según su categoría (frontend, backend o todos)
  useEffect(() => {
    let consulta;
    const itemsCollection = collection(database, "products");

    if (category) {
      const itemsCollectionFiltered = query(
        itemsCollection,
        where("category", "==", category)
      );
      consulta = itemsCollectionFiltered;
    } else {
      consulta = itemsCollection;
    }

    getDocs(consulta)
      .then((res) => {
        const products = res.docs.map((product) => {
          return {
            ...product.data(),
            id: product.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
  }, [category]);

  //Logica contador
  const [quantity, setQuantity] = useState(0);

  function sumar() {
    setQuantity(quantity + 1);
  }

  function restar() {
    setQuantity(quantity - 1);
  }

  if (items.length === 0) {
    return (
      <div className="loaderContainer">
        <img
          src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/beyond-imagination_zfxqv7.png"
          className="contentLoader"
          alt="content loader"
        />
      </div>
    );
  }
  return (
    <ItemList items={items} sumar={sumar} restar={restar} quantity={quantity} />
  );
};

export default ItemListContainer;
