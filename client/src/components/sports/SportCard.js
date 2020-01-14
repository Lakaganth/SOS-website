import React from "react";
import "./sports.scss";

import { Link } from "react-router-dom";

const SportCard = props => {
  const { sport_name, _id } = props.sport;

  return (
    <div className={`card-sport sport-card-wide ${sport_name}`}>
      <h2 className="sports-header text-center">{sport_name.toUpperCase()}</h2>
      <Link to={`/sports/coaches/${_id}`}>
        <button> Coaches</button>
      </Link>
    </div>
  );
};

export default SportCard;
