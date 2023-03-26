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
          <div className="navLinksContainer">
            <a href="/" className="navLinks">
              Categories
            </a>
            <a href="/" className="navLinks">
              Products
            </a>
            <a href="/" className="navLinks">
              FAQS
            </a>
          </div>
          <button className="btn">Sign in</button>
        </navbar>
      </div>
    </>
  );
};
