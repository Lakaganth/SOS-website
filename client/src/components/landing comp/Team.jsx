import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import { animated, useSpring } from "react-spring";
import { Link } from "react-router-dom";

import "./LandingComp.scss";
import Runner from "../../assets/img/landingPage/runner.png";

const Team = () => {
  const [anim, setAnim] = useState(false);

  const runnerAnim = useSpring({
    opacity: anim ? 1 : 0,
    transform: anim ? "translate3d(0,0,0)" : "translate3d(50%,0,0)"
  });
  const paraAnim = useSpring({
    opacity: anim ? 1 : 0,
    transform: anim ? "translate3d(0,0,0)" : "translate3d(0,40%,0)"
  });
  return (
    <div className="team-container">
      <div className="team-text-container">
        <h3>A dream team</h3>
        <Waypoint
          bottomOffset="30%"
          onEnter={() => setAnim(true)}
          onLeave={() => setAnim(false)}
        />
        <animated.p style={paraAnim}>
          Our team is wonderfully supported by a group of sport enthusiasts and
          coaches to develop skills and set a young athlete on their way to
          achieve their goals. We guarantee they are the best on and off the
          field!
        </animated.p>

        <div className="landing-coach-button">
          <Link to="/sports/coaches">
            <button>Coaches</button>
          </Link>
        </div>
      </div>
      <Waypoint
        bottomOffset="30%"
        onEnter={() => setAnim(true)}
        onLeave={() => setAnim(false)}
      >
        <animated.div className="runner" style={runnerAnim}>
          <img src={Runner} alt="Running girl" />
        </animated.div>
      </Waypoint>
      <div className="stripes"></div>
    </div>
  );
};

export default Team;
