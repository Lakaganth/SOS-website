import React from "react";

import "./ContactsPage.scss";
import ContactGuy from "../../assets/img/contactGuy.svg";

import Phone from "../../assets/img/phone.svg";
import EmailIcon from "../../assets/img/email.svg";
import FB from "../../assets/img/fb.svg";
import insta from "../../assets/img/insta.svg";

const ContactsPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-guy">
        <img src={ContactGuy} alt="Contact Avatar" />
      </div>
      <div className="grid-2 contact-page">
        <div className="contact-info">
          <div className="contact-number">
            <img src={Phone} alt="Phone" />
            <h3>091 - 98765 43210</h3>
          </div>
          <div className="contact-email">
            <img src={EmailIcon} alt="Email" />

            <h3>enquiries@schoolofsports.in</h3>
          </div>
          <div className="contact-social">
            <div className="fb">
              <a
                href="https://www.facebook.com/SchoolofSportsThePitch/"
                target="_blank  rel=noopener"
              >
                <img src={FB} alt="facebook" />
              </a>
            </div>
            <div className="insta">
              <a
                href="https://www.instagram.com/schoolofsports_thepitch/"
                target="_blank   rel=noopener"
              >
                <img src={insta} alt="insta" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form container">
          <h3>We'll get in touch..</h3>
          <form className="form">
            <input type="text" placeholder="Name" name="name" required />
            <input type="text" placeholder="Phone" name="phone" required />
            <input type="email" placeholder="E-mail" name="email" required />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
