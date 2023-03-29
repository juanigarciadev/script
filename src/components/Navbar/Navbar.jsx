import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../assets/beyond-imagination.png";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

export const Navbar = () => {
  return (
    <navbar className="navbarContainer">
      <div className="navbar">
        <a href="/">
          <img
            src={logo}
            className="navbarLogo"
            alt="beyond imagination logo"
          />
        </a>
        <ul className="navLinksContainer">
          <li>
            <a href="/" className="navLinks">
              Categories
            </a>
          </li>
          <li>
            <a href="/" className="navLinks">
              Products
            </a>
          </li>
          <li>
            <a href="/" className="navLinks">
              FAQS
            </a>
          </li>
          <li>
            <a href="/" className="navLinks">
              Contact
            </a>
          </li>
        </ul>
        <div className="navbarOptionsContainer">
          <button className="btn">Sign in</button>
          <CartWidget />
          <HiOutlineBars3BottomRight className="navbarToggler faIcons" />
        </div>
      </div>
    </navbar>
  );
};