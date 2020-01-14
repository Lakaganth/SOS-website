import React from "react";

import { Query } from "react-apollo";
import { SPORTS_QUERY } from "../../queries";

import SportCard from "./SportCard";

import "./sports.scss";

const Sports = () => {
  return (
    <div className="sport-container">
      <div className="sport-div">
        <h3 className="m-2 text-center sports-title">Meet Our Coaches</h3>
        <div className="sport-card">
          <Query query={SPORTS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) {
                return <h4>Loading ....</h4>;
              }
              if (error) console.log(error);

              return data.sports.map(sport => {
                return <SportCard key={sport._id} sport={sport} />;
              });
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Sports;
