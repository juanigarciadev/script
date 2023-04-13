import { IoSendSharp } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { BsFiletypePdf } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <section className="newsletter footerDivs">
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
      <div className="divider"></div>
      <section className="footerDivs">
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
        <div className="socialIcons">
          <a
            href="https://github.com/juanigarciadev"
            className="socialCircle noStyleAnchor"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub className="faIcons" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-ignacio-garc%C3%ADa-038763243/"
            className="socialCircle noStyleAnchor"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="faIcons" />
          </a>
          <a
            href="https://www.behance.net/juanigarciadev"
            className="socialCircle noStyleAnchor"
            target="_blank"
            rel="noreferrer"
          >
            <FaBehance className="faIcons" />
          </a>
          <a
            href="https://drive.google.com/file/d/1SYsN-JRo3-5QwL98GUKsr_qlok8Meijx/view"
            className="socialCircle noStyleAnchor"
            target="_blank"
            rel="noreferrer"
          >
            <BsFiletypePdf className="faIcons" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
