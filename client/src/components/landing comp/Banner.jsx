import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

import "./LandingComp.scss";
import Baller from "../../assets/img/landingPage/baller.png";
import RedFlame from "../../assets/img/landingPage/redFlame.png";
import RedFlares from "../../assets/img/landingPage/redFlares.png";

const Banner = () => {
  const flareAnimation = useSpring({
    from: {
      transform: `translate3d(-30%,50%,0) scale(1.4)`,
      opacity: `0.6`
    },
    transform: `translate3d(0,0,0) scale(1)`,
    opacity: `1`
  });
  const flameAnimation = useSpring({
    from: {
      transform: `translate3d(-30%,0%,0) scale(1.2)`,
      opacity: `0.8`
    },
    transform: `translate3d(0,0,0) scale(1)`,
    opacity: `1`
  });
  const ballerAnimation = useSpring({
    from: {
      transform: `translate3d(-40%,10%,0) scale(1.4) `
    },
    transform: `translate3d(0,0%,0) scale(1.1) `,

    config: {
      velocity: 0.5
    }
  });

  return (
    <div className="banner-container">
      <animated.div className="red-flares" style={flareAnimation}>
        <img src={RedFlares} alt="" />
      </animated.div>

      <div className="banner-text">
        <h3>School of Sports</h3>
        <p>Your child's first step to Greatness</p>
      </div>
      <div className="banner-btn">
        <Link to="/sports">
          <button>SPORTS</button>
        </Link>
      </div>

      <div className="banner-logo">
        <animated.div style={ballerAnimation} className="logo-baller">
          <img src={Baller} alt="Basketball player" />
        </animated.div>
      </div>

      <animated.div style={flameAnimation} className="red-flames">
        <img src={RedFlame} alt="" />
      </animated.div>
    </div>
  );
};

export default Banner;
