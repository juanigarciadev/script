import logo from "./assets/beyond-imagination.png";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <navbar className="navbar">
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
          <FaBars className="navbarToggler" />
        </div>
      </navbar>
    </div>
  );
};
