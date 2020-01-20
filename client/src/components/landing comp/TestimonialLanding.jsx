import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import { animated, useSpring } from "react-spring";

import "./LandingComp.scss";
import Dancer from "../../assets/img/landingPage/dancing.svg";
import Testimonials from "./../testimonials/Testimonials";

const TestimonialLanding = () => {
  const [anim, setAnim] = useState(false);

  const dancerAnim = useSpring({
    opacity: anim ? 1 : 0,
    transform: anim ? "translate3d(0,0,0)" : "translate3d(-50%,0,0)"
  });
  const testiAnim = useSpring({
    opacity: anim ? 1 : 0,
    transform: anim ? "translate3d(0,0,0)" : "translate3d(0,-20%,0)"
  });

  return (
    <div className="testimonial-container">
      {/* <div className="circles"></div> */}
      <div className="testi-header">
        <h3>Testimonials</h3>
      </div>
      <Waypoint
        // bottomOffset="30%"
        onEnter={() => setAnim(true)}
        // onLeave={() => setAnim(false)}
      />
      <animated.div style={testiAnim} className="test-landing-cards">
        <Testimonials></Testimonials>
      </animated.div>
      <Waypoint
        // bottomOffset="30%"
        onEnter={() => setAnim(true)}
        // onLeave={() => setAnim(false)}
      />
      <animated.div className="dancer" style={dancerAnim}>
        <img src={Dancer} alt="Dancer" />
      </animated.div>
    </div>
  );
};

export default TestimonialLanding;
