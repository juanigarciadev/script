import logo from "../assets/beyond-imagination.png";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";

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
          <div className="cartContainer">
            <BsCart3 className="faIcons" />
            <span className="cartCounter">0</span>
          </div>
          <HiOutlineBars3BottomRight className="navbarToggler faIcons" />
        </div>
      </navbar>
    </div>
  );
};
