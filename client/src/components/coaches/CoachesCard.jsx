import React from "react";

import "./Coaches.scss";

const CoachesCard = props => {
  const {
    coach_first_name,
    coach_last_name,
    coach_sport,

    coach_img,
    coach_desc
  } = props.coach;

  const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const coach_avatar = `url("${coach_img}")`;

  return (
    <div className="cards coach-card">
      <div
        className="coach-avatar"
        style={{
          background: coach_avatar,
          backgroundSize: "cover",
          backgroundPosition: "center center"
        }}
      ></div>
      <div className="coach-card-content">
        <h2>
          {capitalize(coach_first_name)} {capitalize(coach_last_name)}
        </h2>
        <h3>{capitalize(coach_sport)}</h3>
        <p>{coach_desc}</p>
      </div>
    </div>
  );
};

export default CoachesCard;
