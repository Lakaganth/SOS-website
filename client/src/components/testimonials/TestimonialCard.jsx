import React from "react";
import { Mutation } from "react-apollo";
import { DELETE_TESTIMONIAL } from "./../../queries/index";
import "./Testimonials.scss";
import history from "./../../history";

const TestimonialCard = props => {
  const {
    comments,
    commentor_name,
    client_name,
    client_address,
    _id
  } = props.testi;
  const handleDel = (e, deleteGallery) => {
    deleteGallery().then(({ data }) => {
      console.log(data);
      history.push("/admin");
    });
  };
  const id = _id;
  if (props.admin) {
    console.log(props.testi);
    return (
      <div className="testi-admin-container">
        <div className=" testi-card">
          <p className="testi-comments">{comments}</p>
          <h3>{commentor_name}</h3>
          <h5>{client_name}</h5>
          <h5> {client_address} </h5>
          <Mutation mutation={DELETE_TESTIMONIAL} variables={{ id }}>
            {(deleteTestimonials, { loading, data, error }) => {
              return (
                <div className="testi-del-btn">
                  <button onClick={e => handleDel(e, deleteTestimonials)}>
                    Delete
                  </button>
                </div>
              );
            }}
          </Mutation>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" testi-card">
        <p className="testi-comments">{comments}</p>
        <h3>{commentor_name}</h3>
        <h5>{client_name}</h5>
        <h5> {client_address} </h5>
      </div>
    );
  }
};

export default TestimonialCard;
