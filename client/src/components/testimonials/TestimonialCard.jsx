import React from "react";
import Moment from "react-moment";

import "./Testimonials.scss";

const TestimonialCard = ({ testi, i }) => {
  const {
    comments,
    commentor_name,
    client_name,
    client_address,
    created_date
  } = testi;
  return (
    <div className=" testi-card">
      <p className="testi-comments">{comments}</p>
      <h3>{commentor_name}</h3>
      <h5>{client_name}</h5>
      <h5> {client_address} </h5>
      {/* <h5>
        {" "}
        <Moment format="DD-MM-YY">{created_date}</Moment>{" "}
      </h5> */}
    </div>
  );
};

export default TestimonialCard;
