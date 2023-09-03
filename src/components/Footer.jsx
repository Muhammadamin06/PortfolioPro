import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer container">
      <div className="footer__block">
        <div className="footer__list">
          <Link to={'/'} className="footer__link">
            Home
          </Link>
          <Link to={"/about"} className="footer__link">
            About
          </Link>
          <a href="#stack" className="footer__link">
            Technologies
          </a>
          <a href="#projects" className="footer__link">
            Projects
          </a>
          <Link to={"/about"} className="footer__link">
            Contact
          </Link>
        </div>
        <p className="footer__text">Built by <span>Muhammadamin</span> with Love & Coffee</p>
      </div>
    </div>
  );
}

export default Footer;
