import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="errorContainer">
      <div className="errorLogoContainer">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/beyond-imagination-full_jxvtga.png"
            className="errorLogo"
            alt="beyond imagination logo"
          />
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/diruiumfk/image/upload/v1681927371/404-error-3702359-3119148_yxjlhs.webp"
        alt=""
      />
      <h3 className="subtitles">
        The page that you are trying to find doesn't exists.
      </h3>
      <Link to="/" className="subtitle noStyleAnchor">
        <button className="btn secondary">Go to home</button>
      </Link>
    </div>
  );
};

export default Error404;
