import { IoSendSharp } from "react-icons/io5";

export const Footer = () => {
  return (
    <footer className="footerContainer">
      <section className="newsletter footerDivs">
        <h4 className="subtitles">Subscribe to our newsletter!</h4>
        <div className="subscribeNewsletter">
          <input
            type="email"
            placeholder="Your email here"
            name="newsletter"
            id="newsletter"
          />
          <button className="newsletterBtn">
            Send <IoSendSharp />
          </button>
        </div>
      </section>
      <div className="divider"></div>
      <section className="footerDivs">
        <section className="subtitles">
          Improving the future by working in the present
          <h4 className="smallSubtitles">
            Designed and Built by juanigarciadev
          </h4>
        </section>
        <section className="subtitles">
          Company
          <ul className="footerLinksContainer">
            <li>
              {" "}
              <a href="/" className="smallSubtitles footerLinks">
                About Us
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className="smallSubtitles footerLinks">
                Works
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className="smallSubtitles footerLinks">
                Brand
              </a>
            </li>
          </ul>
        </section>
        <section className=" subtitles">
          Resources
          <ul className="footerLinksContainer">
            <li>
              {" "}
              <a href="/" className="smallSubtitles footerLinks">
                Support
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className="smallSubtitles footerLinks">
                Blog
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className="smallSubtitles footerLinks">
                Opinions
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className="smallSubtitles footerLinks">
                Creators
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className="smallSubtitles footerLinks">
                Benefits
              </a>
            </li>
          </ul>
        </section>
        <section className=" subtitles">
          Policy
          <ul className="footerLinksContainer">
            <li>
              {" "}
              <a href="/" className="smallSubtitles footerLinks">
                Conditions
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className="smallSubtitles footerLinks">
                Privacity
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className="smallSubtitles footerLinks">
                Cookies settings
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className="smallSubtitles footerLinks">
                Licences
              </a>
            </li>
            <li>
              {" "}
              <a href="/" className="smallSubtitles footerLinks">
                Moderation
              </a>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
};
