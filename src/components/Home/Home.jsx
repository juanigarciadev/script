import { useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "BEYOND IMAGINATION";
  }, []);
  return (
    <>
      <main className="main">
        <section className="homeContainer">
          <div className="titleContainer">
            <h3 className="titles">
              Learn
              <span className="highlightText titles"> Web Development</span> at
              the minimum price.
            </h3>
            <h4 className="subtitles">
              From the comfort of your home, cancel whenever you want.
            </h4>
            <div className="homeButtons">
              <Link to="/sign-in" className="noStyleAnchor">
                <button className="btn secondary">Subscribe!</button>
              </Link>
              <Link to="/faqs" className="noStyleAnchor">
                <button className="btn">More information</button>
              </Link>
            </div>
          </div>
          <div className="homeImage">
            <img
              src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/web-development_tat3uu.png"
              alt="home decoration"
            />
          </div>
        </section>
      </main>
      <Outlet />
    </>
  );
};

export default Home;
