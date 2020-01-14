import React from "react";

import EmailIcon from "../../assets/img/email.svg";
import FB from "../../assets/img/fb.svg";
import insta from "../../assets/img/insta.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-grid">
      <div className="contacts-container">
        <div className="footer-email-section">
          <div className="footer-email">
            <img src={EmailIcon} alt="Email" />
          </div>
          <div>
            <h3>enquiries@schoolofsports.in</h3>
          </div>
        </div>
        <div className="social-footer-icons">
          <div className="footer-fb">
            <a
              href="https://www.facebook.com/SchoolofSportsThePitch/"
              target="_blank  rel=noopener"
            >
              <img src={FB} alt="facebook" />
            </a>
          </div>
          <div className="footer-insta">
            <a
              href="https://www.instagram.com/schoolofsports_thepitch/"
              target="_blank   rel=noopener"
            >
              <img src={insta} alt="insta" />
            </a>
          </div>
        </div>
        <div className="footer-copy text-center">
          <h3>Copyright © 2019 School Of Sports - All Rights Reserved.</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
