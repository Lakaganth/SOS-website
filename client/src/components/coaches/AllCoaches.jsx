import React from "react";
import { ALL_COACHES_QUERY } from "../../queries";
import { Query } from "react-apollo";
import CoachesCard from "./CoachesCard";

const AllCoaches = () => {
  return (
    <div className="sport-card all-coach-div">
      <Query query={ALL_COACHES_QUERY}>
        {({ data, loading, error }) => {
          if (loading) {
            return <h4>Loading ....</h4>;
          }
          if (error) console.log(error);

          const { coaches } = data;
          return coaches.map(c => {
            return <CoachesCard key={c._id} coach={c} />;
          });
        }}
      </Query>
    </div>
  );
};

export default AllCoaches;
