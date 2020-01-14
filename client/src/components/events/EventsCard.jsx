import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

import "./Events.scss";

let images = require.context("../../assets/img/event_thumbnails", true);

const EventsCard = props => {
  const { event_name, event_date, sport, _id } = props.event;

  const thumbnail = sport.sport_name;

  let img_src = images(`./${thumbnail}.png`);
  return (
    <div className="events-card">
      <h2 className="text-center">{event_name}</h2>
      <div className="grid-2 event-sub-container">
        <div className="thumbnail-wrapper">
          <img src={img_src} alt="sport" />
        </div>

        <div className="sub-details text-center m-1">
          <h4>Registrations Open!</h4>
          <h4>
            <Moment format="DD-MMM-YYYY">{event_date}</Moment>
          </h4>
          <Link to={`/sports/events/${_id}`}>
            <button className=" event-btn">Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsCard;
