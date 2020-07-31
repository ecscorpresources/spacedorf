import React from "react";
import { Link } from "react-router-dom";
import footerlinks from "../../../constants/footerlinks";
import footericons from "../../../constants/footericons";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section className="footer__links">
          <div>
            <h5>Looking For</h5>
            <ul>
              {footerlinks.links1.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5>Properties</h5>
            <ul>
              {footerlinks.links2.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Quick Assits</h5>
            <ul>
              {footerlinks.links3.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Have A Question ? </h5>
            <ul>
              {footerlinks.links4.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
            <ul className="social-icons">
              {footericons.map((icon, index) => (
                <li key={index}>
                  <a target="_blank" rel="noopener noreferrer" href={icon.url}>
                    <img src={icon.img} alt="social" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
