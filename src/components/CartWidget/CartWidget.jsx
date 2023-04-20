import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  return (
    <section className="navbarOptionsContainer">
      <Link to="/cart" className="noStyleAnchor">
        <div className="cartContainer">
          <BsCart3 className="faIcons" />
          <div className="cartCounter">
            <span>0</span>
          </div>
        </div>
      </Link>
    </section>
  );
};
