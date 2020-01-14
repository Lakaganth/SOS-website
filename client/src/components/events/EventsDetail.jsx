import React from "react";
import { Query } from "react-apollo";
import { withRouter } from "react-router-dom";
import { EVENT } from "../../queries";

import "./Events.scss";
import BackButton from "../../assets/img/back.svg";

let images = require.context("../../assets/img/event_thumbnails", true);

const EventsDetail = ({ match, history }) => {
  const { id } = match.params;

  const eventBack = () => {
    history.push("/sports/events");
  };
  return (
    <div className="eve-details">
      <Query query={EVENT} variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) {
            return <h4>Loading ....</h4>;
          }
          if (error) console.log(error);
          console.log(data.event);
          const {
            event_name,
            rules,
            reg_rules,
            event_date,
            reg_close,
            sport
          } = data.event;

          const thumbnail = sport.sport_name;

          let img_src = images(`./${thumbnail}.png`);
          return (
            <div className="event-details-container">
              <div className="event-details">
                <button className="events-back-button" onClick={eventBack}>
                  <img src={BackButton} alt="back" />
                </button>
                <div className="reg-details">
                  <div className="e-thumbnail-wrapper">
                    <img src={img_src} alt="sport" />
                  </div>
                  <div className="reg-rules">
                    <h3> Registrations Open!</h3>
                    <p dangerouslySetInnerHTML={{ __html: reg_rules }} />
                  </div>
                </div>
                <div className="rules">
                  <h1>{event_name}</h1>
                  <p dangerouslySetInnerHTML={{ __html: rules }} />
                </div>
                <button className="event-btn register-btn">Register</button>
              </div>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default withRouter(EventsDetail);
