import React from "react";
import "./SOSTrustPage.scss";

const SOSTrustPage = () => {
  return (
    <div className="trust trust-card">
      <div className="trust-head">
        <h2 className="trust-header">SOS Trust</h2>
        <img src="https://i.ibb.co/hgmN0qK/Asset-2.png" alt="" />
      </div>

      <p className="trust-text">
        The Trust’s primary mission is to develop vulnerable and underprivileged
        young people from poor family background holistically through
        multi-sports development. School of Sports Trust will be guided by the
        following five objectives:
      </p>
      <ul className="trust-list">
        <li>To teach life skills using sport – empowering young people </li>
        <li>To offer professional coaching to young athletes </li>
        <li>To expose young athletes to opportunities that lie in sport </li>
        <li>To create job opportunities for youth and sports enthusiasts </li>
        <li>
          To expose young athletes to Provincial, National, Regional and
          International competitions
        </li>
      </ul>

      <p className="trust-text">
        <span className="trust-span">Sport focus:</span> The Academy has all the
        sport facilities required to provide an optimal setting to develop the
        student’s talent for sport. This will create the opportunity to obtain a
        sport scholarship through their talent.
      </p>

      <p>
        <span className="trust-span">Educational approach:</span> Besides
        stimulating students to perform well in sports, the Academy will also
        stimulate its students to develop creative and practical thinking. The
        Trust which has applied for charitable status aims to impart multi-sport
        training to underprivileged children in conjunction with education,
        combining sports disciplines, trainings and general educational
        standards. This will contribute to the development of participation in
        sports as the Academy develops its outreach with a broader range of
        groups including young people and girls.
      </p>
      <div className="donate-btn">
        <button>Donate</button>
      </div>
    </div>
  );
};

export default SOSTrustPage;
