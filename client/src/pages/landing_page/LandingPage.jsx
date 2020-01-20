import React from "react";

import "./LandingPage.scss";
import Footer from "../../components/footer/Footer";
// import MainLogo from "../../assets/img/bb.png";
// import TestimonialImage from "../../assets/img/ball-shoot.png";
import Banner from "../../components/landing comp/Banner";
import Bio from "../../components/landing comp/Bio";
import Team from "../../components/landing comp/Team";
import TestimonialLanding from "../../components/landing comp/TestimonialLanding";

const LandingPage = () => {
  return (
    <div className="landing-page-wrapper smooth">
      <section className=" lpage lp1 text-center">
        <Banner></Banner>
      </section>

      <section className="lpage lp2">
        <Bio></Bio>
      </section>

      <section className="lpage lp4 testimonials-page">
        <Team></Team>
      </section>
      <section>
        <TestimonialLanding></TestimonialLanding>
      </section>
      <div className=" footer ">
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
