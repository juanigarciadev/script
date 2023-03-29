import { BsCart3 } from "react-icons/bs";

export const CartWidget = () => {
  return (
    <section className="navbarOptionsContainer">
      <div className="cartContainer">
        <BsCart3 className="faIcons" />
        <span className="cartCounter">0</span>
      </div>
    </section>
  );
};
