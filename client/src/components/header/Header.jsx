import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/img/newL.svg";
import Menu from "../../assets/img/menu.svg";

import "./Header.scss";
import MobileHeader from "./MobileHeader";
import FirebaseContext from "./../../context/firebase/firebaseContext";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, firebase } = React.useContext(FirebaseContext);

  const toggleMenu = () => {
    setShowMenu(prevState => {
      return { showMenu: !prevState.showMenu };
    });
  };

  const closeMenu = () => {
    setShowMenu(prevState => {
      return { showMenu: !prevState.showMenu };
    });
  };

  return (
    <nav className="navbar grid-2">
      <Link to="/" className="logo">
        <img src={Logo} alt="SOS" />
      </Link>

      <div className="menu-burger">
        {/* <a href="/#" onClick={toggleMenu}> */}
        <img src={Menu} alt="Menu bar" onClick={toggleMenu} />
        {/* </a> */}
      </div>
      {showMenu.showMenu ? <MobileHeader handleClosemenu={closeMenu} /> : null}

      <div className="nav-links">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li className="text-center">
            <NavLink to="/sos-trust">SOS Trust</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          {user ? (
            <li>
              <button onClick={() => firebase.logout()}>SignOut</button>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
