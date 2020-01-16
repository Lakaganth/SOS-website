import React from "react";
import { withRouter } from "react-router-dom";
import FirebaseContext from "./../../context/firebase/firebaseContext";

import { Query } from "react-apollo";
import { GET_COACHES_FROM_SPORT } from "../../queries";
import CoachesCard from "./CoachesCard";

import "./Coaches.scss";

const Coaches = ({ match }) => {
  const { _id } = match.params;
  const { user } = React.useContext(FirebaseContext);

  if (user) {
    return (
      <div className="coach-card sport-card">
        <Query query={GET_COACHES_FROM_SPORT} variables={{ _id }}>
          {({ data, loading, error }) => {
            if (loading) {
              return <h4>Loading ....</h4>;
            }
            if (error) console.log(error);

            const { coach } = data.sport;

            return coach.map(c => {
              return <CoachesCard key={c._id} coach={c} />;
            });
          }}
        </Query>
      </div>
    );
  } else {
    return (
      <div className="sport-card">
        <Query query={GET_COACHES_FROM_SPORT} variables={{ _id }}>
          {({ data, loading, error }) => {
            if (loading) {
              return <h4>Loading ....</h4>;
            }
            if (error) console.log(error);

            const { coach } = data.sport;

            return coach.map(c => {
              return <CoachesCard key={c._id} coach={c} />;
            });
          }}
        </Query>
      </div>
    );
  }
};

export default withRouter(Coaches);
