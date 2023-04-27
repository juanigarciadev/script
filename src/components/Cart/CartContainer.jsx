import { useContext, useEffect } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);
  useEffect(() => {
    document.title = "Cart | BEYOND IMAGINATION";
  }, []);

  let cartTotalPrice = getTotalPrice();

  return (
    <div>
      <Cart
        cart={cart}
        clearCart={clearCart}
        deleteProductById={deleteProductById}
        cartTotalPrice={cartTotalPrice}
      />
    </div>
  );
};

export default CartContainer;
