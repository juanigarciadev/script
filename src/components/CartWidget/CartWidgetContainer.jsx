import React, { useContext } from "react";
import { CartWidget } from "./CartWidget";
import { CartContext } from "../../context/CartContext";

const CartWidgetContainer = () => {
  const { cartTotalQuantity } = useContext(CartContext);
  let total = cartTotalQuantity();
  return <CartWidget total={total} />;
};

export default CartWidgetContainer;
