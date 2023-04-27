import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemCountContainer = ({ stock, onAdd }) => {
  //Logica contador
  const [quantity, setQuantity] = useState(0);

  const addedToCartToast = () =>
    toast.success("Added to cart!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  function add() {
    quantity < stock ? setQuantity(quantity + 1) : alert("Stock máximo");
  }

  function substract() {
    setQuantity(quantity - 1);
  }
  return (
    <ItemCount
      stock={stock}
      add={add}
      substract={substract}
      quantity={quantity}
      onAdd={onAdd}
      addedToCartToast={addedToCartToast}
    />
  );
};

export default ItemCountContainer;
