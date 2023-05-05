import { CartWidget } from "../CartWidget/CartWidget";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbarContainer prevent-select">
        <div className="navbar">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/beyond-imagination-full_jxvtga.png"
              className="full navbarLogo"
              alt="beyond imagination logo"
            />
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/beyond-imagination_zfxqv7.png"
              className="mini navbarLogo"
              alt="beyond imagination logo"
            />
          </Link>
          <nav className="navLinksContainer">
            <Link to="/products" className="navLinks">
              All Products
            </Link>
            <Link to="/products/frontend" className="navLinks">
              Frontend
            </Link>
            <Link to="/products/backend" className="navLinks">
              Backend
            </Link>
            <Link to="/faqs" className="navLinks">
              FAQS
            </Link>
            <Link to="/contact" className="navLinks">
              Contact
            </Link>
          </nav>
          <div className="navbarOptionsContainer">
            <Link to="/log-in" className="btn">
              Log In
            </Link>
            <CartWidget />
            <HiOutlineBars3BottomRight className="navbarToggler faIcons" />
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
