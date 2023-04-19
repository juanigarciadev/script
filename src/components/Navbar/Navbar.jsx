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
          <ul className="navLinksContainer">
            <Link to="/" className="navLinks">
              Categories
            </Link>
            <Link to="/products" className="navLinks">
              Products
            </Link>
            <Link to="/" className="navLinks">
              FAQS
            </Link>
            <Link to="/" className="navLinks">
              Contact
            </Link>
          </ul>
          <div className="navbarOptionsContainer">
            <Link to="/sign-in" className="btn">
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
