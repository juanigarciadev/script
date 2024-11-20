import { useContext, useEffect } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartContainer = () => {
  const navigate = useNavigate();

  // Importación de todo lo necesario del contexto global CartContext
  const { cart, clearCart, deleteProductById, getTotalPrice } =
    useContext(CartContext);

  useEffect(() => {
    document.title = "Cart | DevBoost";
  }, []);

  let cartTotalPrice = getTotalPrice();

  return (
    <div>
      <Cart
        cart={cart}
        clearCart={clearCart}
        deleteProductById={deleteProductById}
        cartTotalPrice={cartTotalPrice}
        navigate={navigate}
      />
    </div>
  );
};

export default CartContainer;
