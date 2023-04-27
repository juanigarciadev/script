import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

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
            quantity: element.quantity + product.quantity,
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

  let data = {
    cart,
    cartTotalQuantity,
    addToCart,
    clearCart,
    deleteProductById,
    getTotalPrice,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
