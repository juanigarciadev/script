import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { cartTotalQuantity } = useContext(CartContext);
  let total = cartTotalQuantity();
  return (
    <section className="navbarOptionsContainer">
      <Link to="/cart" className="noStyleAnchor">
        <div className="cartContainer">
          <BsCart3 className="faIcons" />
          <div className="cartCounter">
            <span>{total}</span>
          </div>
        </div>
      </Link>
    </section>
  );
};
