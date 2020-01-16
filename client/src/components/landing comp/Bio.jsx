import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";

import "./LandingComp.scss";
import Gymnasium from "../../assets/img/landingPage/gym.png";

const Bio = () => {
  const [anim, setAnim] = useState(false);

  const girlAnim = useSpring({
    opacity: anim ? 1 : 0,
    transform: anim ? "translate3d(0,0,0)" : "translate3d(-80%,20%,0)",
    scale: anim ? 1 : 1.5
  });
  const paraAnim = useSpring({
    opacity: anim ? 1 : 0,
    transform: anim ? "translate3d(0,0,0)" : "translate3d(90%,0,0)",
    scale: anim ? 1.5 : 1
  });

  return (
    <div className="bio-container">
      <div className="bio-bg"></div>
      <div className="bio-text-container">
        <h3>An inclusive children's sports academy</h3>

        <Waypoint
          bottomOffset="50%"
          onEnter={() => setAnim(true)}
          onLeave={() => setAnim(false)}
        />
        <animated.p style={paraAnim}>
          School Of Sports (SOS) believes in empowering children by giving an
          inclusive sporting experience. By collaborating with schools, sports
          clubs and housing societies, we aim to train and guide children by
          providing them all the skills necessary to become the superstar they
          are!{" "}
        </animated.p>
        <div className="landing-gal-buton">
          <Link to="/gallery">
            <button>View Gallery</button>
          </Link>
        </div>
      </div>

      <Waypoint
        bottomOffset="30%"
        onEnter={() => setAnim(true)}
        onLeave={() => setAnim(false)}
      />
      <animated.div className="gym-girl" style={girlAnim}>
        <img src={Gymnasium} alt="Aerobic girl" />
      </animated.div>
    </div>
  );
};

export default Bio;
