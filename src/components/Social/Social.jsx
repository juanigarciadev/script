import githubLogo from "../../assets/github-logo.png";
import facebookLogo from "../../assets/facebook-logo.png";
import googleLogo from "../../assets/google-logo.png";

export const Social = () => {
  return (
    <>
      <section className="trustedTitle">
        <h3 className="subtitles">Trusted By</h3>
      </section>
      <section className="socialContainer">
        <div className="socialLogoContainer">
          <img src={githubLogo} className="logo-icon" alt="" />
        </div>
        <div className="socialLogoContainer">
          <img src={facebookLogo} className="logo-icon" alt="" />
        </div>
        <div className="socialLogoContainer">
          <img src={googleLogo} className="logo-icon" alt="" />
        </div>
        <div className="socialLogoContainer">
          <img src={githubLogo} className="logo-icon" alt="" />
        </div>
        <div className="socialLogoContainer">
          <img src={facebookLogo} className="logo-icon" alt="" />
        </div>
        <div className="socialLogoContainer">
          <img src={googleLogo} className="logo-icon" alt="" />
        </div>
      </section>
    </>
  );
};