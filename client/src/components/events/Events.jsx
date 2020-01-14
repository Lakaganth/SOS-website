import React from "react";
import { Query } from "react-apollo";
import { All_EVENTS } from "./../../queries/index";
import EventsCard from "./EventsCard";

const Events = () => {
  return (
    <div className="event-container">
      <Query query={All_EVENTS}>
        {({ loading, error, data }) => {
          if (loading) {
            return <h4>Loading ....</h4>;
          }
          if (error) console.log(error);
          console.log(data);
          const { events } = data;
          return events.map(e => <EventsCard key={e._id} event={e} />);
        }}
      </Query>
    </div>
  );
};

export default Events;
