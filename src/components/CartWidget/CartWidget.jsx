import { BsCart3 } from "react-icons/bs";

export const CartWidget = () => {
  return (
    <section className="navbarOptionsContainer">
      <div className="cartContainer">
        <BsCart3 className="faIcons" />
        <div className="cartCounter">
          <span>0</span>
        </div>
      </div>
    </section>
  );
};
