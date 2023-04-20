import { Link } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    document.title = "Log In | BEYOND IMAGINATION";
  }, []);
  return (
    <section className="loginContainer">
      <div className="login">
        <Link to="/" className="subtitle goBackHome">
          <BsChevronLeft />
          Return to home
        </Link>
        <h1 className="loginTitle">Log In to BEYOND IMAGINATION</h1>
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
              value="Log In"
              className="formBtn btn secondary"
            />
            <label className="smallSubtitles">
              Need an account? <Link to="/sign-up">Sign Up</Link>
            </label>
          </form>
        </div>
        <div className="loginOptionsContainer">
          <h3 className="smallSubtitles">You can also</h3>
          <button className="loginOptionsBtn">
            <FiGithub className="faIcons" />
            Log In with Github
          </button>
          <button className="loginOptionsBtn">
            <FaLinkedinIn className="faIcons" />
            Log In with LinkedIn
          </button>
          <button className="loginOptionsBtn">
            <FaBehance className="faIcons" />
            Log In with Behance
          </button>
        </div>
      </div>
      <div className="backgroundImageLogin"></div>
    </section>
  );
};

export default Login;
