import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  let cartLocal = JSON.parse(localStorage.getItem("cart"));
  let existInLocalStorage = cartLocal || [];

  const [cart, setCart] = useState(existInLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const cartTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);

    return total;
  };

  const isInCart = (id) => {
    let exist = cart.some((elemento) => elemento.id === id);
    return exist;
  };

  const addToCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newCart = cart.map((element) => {
        if (element.id === product.id) {
          return {
            ...element,
            quantity: product.quantity,
          };
        } else {
          return element;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const deleteProductById = (id) => {
    const productFiltered = cart.filter((element) => element.id !== id);
    setCart(productFiltered);
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const getQuantityById = (id) => {
    let product = cart.find((element) => element.id === id);
    return product?.quantity;
  };

  let data = {
    cart,
    cartTotalQuantity,
    addToCart,
    clearCart,
    deleteProductById,
    getTotalPrice,
    getQuantityById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
