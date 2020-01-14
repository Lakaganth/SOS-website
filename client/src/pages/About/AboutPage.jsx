import React from "react";

import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-page">
        <div className="founder-card">
          <div className="founder-profile"></div>
          <h2>Paul Henning</h2>
          <h3> Founder</h3>
          <p>
            After spending more than a decade in the banking industry, a
            serendipitous event inspired Paul to start, School Of Sports. In his
            last corporate role, Paul worked with Standard Chartered Bank,
            Mumbai, as Associate Director - Business Planning & Strategy for the
            large corporates and the commercial banking sector.
            <br />
            <br />
            Having experience as a First Division cricketer and a snooker
            enthusiast, he is a hands-on leader who is deeply involved in the
            development of his team, the company and most importantly the
            children we train.{" "}
          </p>
        </div>
        <div className="director-card">
          <div className="director-profile"></div>
          <h2>Susan Lebaowski</h2>
          <h3> Director</h3>
          <p>
            Susan worked with the Corporate Affairs team, Standard Chartered
            Global Business Services, as an Internal and External Public
            Relations Specialist prior to joining School Of Sports.
            <br />
            <br /> As a District level volleyball player and sports enthusiast,
            she handles the operations at the company in her usual organised and
            meticulous way. She is a reliable sounding board for all things
            School Of Sports.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
