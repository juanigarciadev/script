import React from "react";
import { Link } from "react-router-dom";

const PageInProcess = () => {
  return (
    <div className="missingContainer">
      <img
        src="https://res.cloudinary.com/diruiumfk/image/upload/v1681960413/under_construction_bnjqcw.png"
        alt=""
        className="underConstruction"
      />
      <h3 className="subtitles">
        Page is under construction, please, be patient.
      </h3>
      <Link to="/" className="subtitle noStyleAnchor">
        <button className="btn secondary">Go to home</button>
      </Link>
    </div>
  );
};

export default PageInProcess;
