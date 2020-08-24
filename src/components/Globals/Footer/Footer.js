import React from "react";
import { Link } from "react-router-dom";
import footerlinks from "../../../constants/footerlinks";
import footericons from "../../../constants/footericons";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <section>
          <div style={{ marginBottom: "4rem" }}>
            <ul className="d-flex justify-content-center links">
              {footerlinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{ marginBottom: "3rem" }}
            className="d-flex align-items-center icons-section"
          >
            <h5 className="mr-4">Follow Us</h5>
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

        <p>
          Copyright &copy; {new Date().getFullYear()} Spacedorf. All Rights
          Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
