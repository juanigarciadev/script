import { Link } from "react-router-dom";

const MissingPage = () => {
  return (
    <div className="missingContainer">
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

export default MissingPage;
