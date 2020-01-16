import React from "react";
import { Query } from "react-apollo";
import { GET_ALL_TESTIMONIALS } from "./../../queries/index";
import TestimonialCard from "./TestimonialCard";

export const AdminTestimonial = () => {
  return (
    <div className="admin-testimonials-card">
      <Query query={GET_ALL_TESTIMONIALS}>
        {({ data, loading, error }) => {
          if (loading) {
            return <h4>Loading ....</h4>;
          }
          if (error) return console.log(error);
          const { testimonials } = data;
          return testimonials.map((tm, index) => {
            return (
              <TestimonialCard key={tm._id} i={index} testi={tm} admin={true} />
            );
          });
        }}
      </Query>
    </div>
  );
};
