import CartWidgetContainer from "../CartWidget/CartWidgetContainer";
import { HiChevronUp } from "react-icons/hi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { Outlet, Link } from "react-router-dom";

const Navbar = ({ open, setOpen, menuRef, dropdownRef }) => {
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
            <p
              className="navLinks"
              ref={dropdownRef}
              onClick={() => setOpen(!open)}
            >
              Categories
              <HiChevronUp />
            </p>
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
            <CartWidgetContainer />
            <HiOutlineBars3BottomRight className="navbarToggler faIcons" />
          </div>
        </div>
        {open && (
          <div className="categoriesContainer" ref={menuRef}>
            <ul>
              <Link
                to="/products"
                className="navLinksExpanded"
                onClick={() => setOpen(false)}
              >
                All Products
              </Link>
              <Link
                to="/products/frontend"
                className="navLinksExpanded"
                onClick={() => setOpen(false)}
              >
                Frontend
              </Link>
              <Link
                to="/products/backend"
                className="navLinksExpanded"
                onClick={() => setOpen(false)}
              >
                Backend
              </Link>
            </ul>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
