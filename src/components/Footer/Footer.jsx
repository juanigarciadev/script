import { IoSendSharp } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaBehance } from "react-icons/fa";
import { BsFiletypePdf } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Outlet />
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
                <Link to="/" className="smallSubtitles footerLinks">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="smallSubtitles footerLinks">
                  Works
                </Link>
              </li>
              <li>
                <Link to="/" className="smallSubtitles footerLinks">
                  Brand
                </Link>
              </li>
            </ul>
          </section>
          <section className=" subtitles">
            Resources
            <ul className="footerLinksContainer">
              <li>
                <Link to="/" className="smallSubtitles footerLinks">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/" className="smallSubtitles footerLinks">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="smallSubtitles footerLinks">
                  Opinions
                </Link>
              </li>
              <li>
                <Link to="/" className="smallSubtitles footerLinks">
                  Creators
                </Link>
              </li>
              <li>
                <Link to="/" className="smallSubtitles footerLinks">
                  Benefits
                </Link>
              </li>
            </ul>
          </section>
          <section className=" subtitles">
            Policy
            <ul className="footerLinksContainer">
              <li>
                <Link to="/" className="smallSubtitles footerLinks">
                  Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="smallSubtitles footerLinks">
                  Privacity
                </Link>
              </li>
              <li>
                <Link to="/" className="smallSubtitles footerLinks">
                  Cookies settings
                </Link>
              </li>
              <li>
                <Link to="/" className="smallSubtitles footerLinks">
                  Licences
                </Link>
              </li>
              <li>
                <Link to="/" className="smallSubtitles footerLinks">
                  Moderation
                </Link>
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
              title="Github"
              draggable="false"
            >
              <FiGithub className="faIcons" />
            </a>
            <a
              href="https://www.linkedin.com/in/juan-ignacio-garc%C3%ADa-038763243/"
              className="socialCircle noStyleAnchor"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              draggable="false"
            >
              <FaLinkedinIn className="faIcons" />
            </a>
            <a
              href="https://www.behance.net/juanigarciadev"
              className="socialCircle noStyleAnchor"
              target="_blank"
              rel="noreferrer"
              title="Behance"
              draggable="false"
            >
              <FaBehance className="faIcons" />
            </a>
            <a
              href="https://drive.google.com/file/d/1SYsN-JRo3-5QwL98GUKsr_qlok8Meijx/view"
              className="socialCircle noStyleAnchor"
              target="_blank"
              rel="noreferrer"
              title="Curriculum Vitae"
              draggable="false"
            >
              <BsFiletypePdf className="faIcons" />
            </a>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
