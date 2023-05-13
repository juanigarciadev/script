import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartWidget = ({ total }) => {
  return (
    <section className="navbarOptionsContainer">
      <Link to="/cart" className="noStyleAnchor" title="Cart" draggable="false">
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
