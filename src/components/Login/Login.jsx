import { Link } from "react-router-dom";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

const Login = () => {
  return (
    <section className="loginContainer">
      <div className="login">
        <h1 className="loginTitle">Log In into your account</h1>
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
          <button className="loginOptionsBtn secondary">
            <AiOutlineGoogle className="faIcons" />
            Log In with Google
          </button>
          <button className="loginOptionsBtn secondary">
            <FiGithub className="faIcons" />
            Log In with Github
          </button>
          <button className="loginOptionsBtn secondary">
            <FaLinkedinIn className="faIcons" />
            Log In with LinkedIn
          </button>
        </div>
      </div>
      <div className="backgroundImageLogin"></div>
    </section>
  );
};

export default Login;
