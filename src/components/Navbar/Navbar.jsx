import CartWidgetContainer from "../CartWidget/CartWidgetContainer";
import { HiChevronDown } from "react-icons/hi";
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
  navReset,
}) => {
  return (
    <div>
      <div className="navbarContainer prevent-select">
        <div className="navbar">
          <Link to="/" className="scriptLogo" draggable="false">
            <h1 className="scriptLogo">{'</script>'}</h1>
          </Link>
          <nav className="navLinksContainer">
            <p
              className="navLinks"
              ref={dropdownRef}
              onClick={() => setOpen(!open)}
            >
              Categories
              <HiChevronDown />
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
                onClick={navReset}
              >
                All Products
              </Link>
              <Link
                to="/products/frontend"
                className="navLinksExpanded"
                draggable="false"
                onClick={navReset}
              >
                Frontend
              </Link>
              <Link
                to="/products/backend"
                className="navLinksExpanded"
                draggable="false"
                onClick={navReset}
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
