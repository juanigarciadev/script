import { Outlet } from "react-router-dom";

const Trusted = () => {
  return (
    <>
      <section className="trustedTitle">
        <h3 className="subtitles">Trusted By</h3>
      </section>
      <section className="socialContainer">
        <div className="socialLogoContainer">
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/github-logo_kzgrha.png"
            className="logo-icon"
            alt="github logo"
          />
        </div>
        <div className="socialLogoContainer">
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/facebook-logo_jw6ymw.png"
            className="logo-icon"
            alt="facebook logo"
          />
        </div>
        <div className="socialLogoContainer">
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216083/google-logo_k0d0kt.png"
            className="logo-icon"
            alt="google logo"
          />
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default Trusted;
