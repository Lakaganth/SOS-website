import React, { useEffect, useRef } from "react";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import { useSpring, animated, config } from "react-spring";

import "./LandingComp.scss";
import Baller from "../../assets/img/landingPage/baller.png";
import RedFlame from "../../assets/img/landingPage/redFlame.png";
import RedFlares from "../../assets/img/landingPage/redFlares.png";

const Banner = () => {
  let app = useRef(null);
  let baller = useRef(null);
  let flame = useRef(null);
  let flare = useRef(null);

  let tl = new TimelineLite({ delay: 0.3 });
  // useEffect(() => {
  //   TweenMax.to(app, 0, { css: { visibility: "visible" } });

  //   tl.from(baller, 1.2, { y: 500, ease: Power3.easeInOut })
  //     .from(baller, 1.2, { scale: 1.8, ease: Power3.easeInOut }, 0.2)
  //     .from(flame, 1.2, { x: -200, ease: Power3.easeInOut }, 0.2)
  //     .from(flare, 1.2, { y: -200, ease: Power3.easeInOut }, 0.2);
  // }, [tl]);

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
      transform: `translate3d(40%,10%,0) scale(1.4) `
    },
    transform: `translate3d(0,0%,0) scale(1.1) `,

    config: {
      velocity: 0.5
    }
  });

  return (
    <div className="banner-container" ref={el => (app = el)}>
      <animated.div
        className="red-flares"
        style={flareAnimation}
        ref={el => (flare = el)}
      >
        <img src={RedFlares} alt="" />
      </animated.div>

      <div className="banner-text">
        <h3>School of Sports</h3>
        <p>Your child's first step to Greatness</p>
      </div>

      <div className="banner-logo" ref={el => (baller = el)}>
        <animated.div style={ballerAnimation} className="logo-baller">
          <img src={Baller} alt="Basketball player" />
        </animated.div>
      </div>

      <animated.div
        style={flameAnimation}
        className="red-flames"
        ref={el => (flame = el)}
      >
        <img src={RedFlame} alt="" />
      </animated.div>
    </div>
  );
};

export default Banner;
