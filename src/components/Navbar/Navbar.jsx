import CartWidgetContainer from "../CartWidget/CartWidgetContainer";
import { HiChevronUp } from "react-icons/hi";
import { BsFillCollectionFill, BsQuestionCircleFill } from "react-icons/bs";
import { RiContactsFill } from "react-icons/ri";
import { Outlet, Link } from "react-router-dom";

const Navbar = ({
  open,
  setOpen,
  menuRef,
  dropdownRef,
  mobileNavbar,
  setMobileNavbar,
  barsRef,
  navToggledRef,
}) => {
  return (
    <div>
      <div className="navbarContainer prevent-select">
        <div className="navbar">
          <Link to="/" draggable="false">
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
            <Link to="/log-in" className="btn" draggable="false">
              Log In
            </Link>
            <CartWidgetContainer />
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1683992248/bars_n3bbpi.png"
              className="navbarToggler barsIcon"
              alt="navbar toggler in mobile devices"
              ref={barsRef}
              onClick={() => setMobileNavbar(!mobileNavbar)}
            />
          </div>
        </div>
        {open && (
          <div className="categoriesContainer" ref={menuRef}>
            <ul>
              <Link
                to="/products"
                className="navLinksExpanded"
                draggable="false"
                onClick={() => setOpen(false)}
              >
                All Products
              </Link>
              <Link
                to="/products/frontend"
                className="navLinksExpanded"
                draggable="false"
                onClick={() => setOpen(false)}
              >
                Frontend
              </Link>
              <Link
                to="/products/backend"
                className="navLinksExpanded"
                draggable="false"
                onClick={() => setOpen(false)}
              >
                Backend
              </Link>
            </ul>
          </div>
        )}

        {mobileNavbar && (
          <div className="mobileNavbarToggled" ref={navToggledRef}>
            <nav className="navLinksContainerToggled">
              <Link
                to="/products"
                className="navLinksToggled"
                onClick={() => setMobileNavbar(false)}
              >
                <BsFillCollectionFill />
                Products
              </Link>
              <Link
                to="/faqs"
                className="navLinksToggled"
                onClick={() => setMobileNavbar(false)}
              >
                <BsQuestionCircleFill />
                FAQS
              </Link>
              <Link
                to="/contact"
                className="navLinksToggled"
                onClick={() => setMobileNavbar(false)}
              >
                <RiContactsFill />
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
