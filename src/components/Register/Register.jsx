import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { useEffect } from "react";
import ReturnButtonContainer from "../ReturnButton/ReturnButtonContainer";

const Register = () => {
  useEffect(() => {
    document.title = "Sign Up | BEYOND IMAGINATION";
  }, []);
  return (
    <section className="loginContainer">
      <div className="login">
        <div to="/" className=" goBackHome">
          <ReturnButtonContainer />
        </div>
        <h1 className="loginTitle">Sign Up to BEYOND IMAGINATION</h1>
        <div>
          <form action="" method="get" className="loginForm">
            <input
              type="email"
              placeholder="me@beyondimagination.com"
              className="forms"
            />
            <input
              type="password"
              placeholder="***************"
              className="forms"
            />
            <input
              type="button"
              value="Sign Up"
              className="formBtn btn secondary"
            />
            <label className="smallSubtitles">
              Already have a account? <Link to="/log-in">Log In</Link>
            </label>
          </form>
        </div>
        <div className="loginOptionsContainer">
          <h3 className="smallSubtitles">You can also</h3>
          <button className="loginOptionsBtn">
            <FiGithub className="faIcons" />
            Sign Up with Github
          </button>
          <button className="loginOptionsBtn">
            <FaLinkedinIn className="faIcons" />
            Sign Up with LinkedIn
          </button>
          <button className="loginOptionsBtn">
            <FaBehance className="faIcons" />
            Sign Up with Behance
          </button>
        </div>
      </div>
      <div className="backgroundImageLogin"></div>
    </section>
  );
};

export default Register;
