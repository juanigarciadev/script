import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import ReturnButtonContainer from "../ReturnButton/ReturnButtonContainer";

const Register = () => {
  return (
    <section className="loginContainer">
      <div className="login">
        <div to="/" className="goBackHome">
          <ReturnButtonContainer />
        </div>
        <h1 className="loginTitle">Create an account</h1>
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
          <button className="loginOptionsBtn secondary">
            <AiOutlineGoogle className="faIcons" />
            Sign In with Google
          </button>
          <button className="loginOptionsBtn secondary">
            <FiGithub className="faIcons" />
            Sign Up with Github
          </button>
          <button className="loginOptionsBtn secondary">
            <FaLinkedinIn className="faIcons" />
            Sign Up with LinkedIn
          </button>
        </div>
      </div>
      <div className="backgroundImageLogin"></div>
    </section>
  );
};

export default Register;
