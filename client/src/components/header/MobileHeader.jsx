import React from "react";
import { Link } from "react-router-dom";
import MenuClose from "../../assets/img/menuClose.svg";

import "./Header.scss";

const MobileHeader = props => {
  return (
    <div>
      <div className="mobile-nav-links">
        <div className="menu-close">
          {/* <Link to="" onClick={props.handleClosemenu}> */}
          <img src={MenuClose} alt="close" onClick={props.handleClosemenu} />
          {/* </Link> */}
        </div>

        <ul>
          <li>
            <Link to="/" onClick={props.handleClosemenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/events" onClick={props.handleClosemenu}>
              Events
            </Link>
          </li>
          <li>
            <Link to="/sos-trust" onClick={props.handleClosemenu}>
              SOS Trust
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={props.handleClosemenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={props.handleClosemenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileHeader;
