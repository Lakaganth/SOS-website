import React from "react";
import { graphql } from "react-apollo";
import { Mutation } from "react-apollo";

import "./Coaches.scss";

const CoachesCard = props => {
  const {
    coach_first_name,
    coach_last_name,
    coach_sport,
    _id,
    coach_img,
    coach_desc
  } = props.coach;
  console.log(props);
  const capitalize = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="cards coach-card">
      <div className="del-btn">
        <button>X</button>
      </div>
      <div className="coach-card-content">
        <div className="coach-avatar"></div>
        <h1>
          {capitalize(coach_first_name)} {capitalize(coach_last_name)}
        </h1>
        <h1>{capitalize(coach_sport)}</h1>
      </div>
    </div>
  );
};

export default CoachesCard;
