import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";
// import { Waypoint } from "react-waypoint";
import { NavLink } from "react-router-dom";

import "./HeaderNav.scss";
import SosLogo from "../../assets/img/sosLogo.svg";

const HeaderNav = ({ showLogo }) => {
  const [isNavOpen, setNavOpen] = useState(false);

  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0 ,0)  scale(1)`
      : `translate3d(100%,0,0) scale(0.6)`
  });
  const menuAnimation1 = useSpring({
    transform: isNavOpen
      ? `translateY(2px) rotate(45deg)`
      : ` translateY(0px) rotate(0deg)`
  });
  const menuAnimation2 = useSpring({
    transform: isNavOpen
      ? `translateY(-12px) rotate(135deg)`
      : ` translateY(0px) rotate(0deg)`
  });
  const logoAnimation = useSpring({
    opacity: showLogo ? 1 : 0
  });
  return (
    <React.Fragment>
      <div className="nav-container">
        <animated.div style={logoAnimation} className="logo-container">
          <Link to="/">
            <img src={SosLogo} alt="LakaGanth" />
          </Link>
        </animated.div>

        <div
          onClick={() => setNavOpen(!isNavOpen)}
          className="menu-burger-container"
        >
          <animated.div
            style={menuAnimation1}
            className="top-bun"
          ></animated.div>
          <animated.div
            style={menuAnimation2}
            className="bottom-bun"
          ></animated.div>
        </div>
        {/* <NavDropdown styles={navAnimation} navOpen={setNavOpen}></NavDropdown> */}
        <animated.div className="nav-wrapper" style={navAnimation}>
          <NavLink to="/" onClick={() => setNavOpen(!isNavOpen)}>
            Home
          </NavLink>
          <NavLink to="/sports" onClick={() => setNavOpen(!isNavOpen)}>
            Sports
          </NavLink>
          <NavLink to="/about" onClick={() => setNavOpen(!isNavOpen)}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setNavOpen(!isNavOpen)}>
            Contact
          </NavLink>
          <NavLink to="/admin" onClick={() => setNavOpen(!isNavOpen)}>
            Admin
          </NavLink>
        </animated.div>
      </div>
      <div className="wide-nav">
        <animated.div style={logoAnimation} className="logo-container">
          <Link to="/">
            <img src={SosLogo} alt="LakaGanth" />
          </Link>
        </animated.div>

        <div className="wide-nav-wrapper">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sports">Sports</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderNav;
