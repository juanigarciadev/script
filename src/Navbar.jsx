import logo from "./assets/beyond-imagination.png";

export const Navbar = () => {
  return (
    <>
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
              {" "}
              <a href="/" className="navLinks">
                Categories
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className="navLinks">
                Products
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className="navLinks">
                FAQS
              </a>
            </li>
          </ul>
          <button className="btn">Sign in</button>
        </navbar>
      </div>
    </>
  );
};
