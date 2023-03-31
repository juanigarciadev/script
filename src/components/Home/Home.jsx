export const Home = () => {
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
              <button className="btn secondary">Subscribe!</button>
              <button className="btn">More information</button>
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
    </>
  );
};
