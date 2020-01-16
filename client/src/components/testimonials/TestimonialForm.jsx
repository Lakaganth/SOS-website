import React from "react";
import { Mutation } from "react-apollo";
import FirebaseContext from "./../../context/firebase/firebaseContext";
import { CREATE_NEW_TESTIMONIAL } from "./../../queries/index";

export const TestimonialForm = () => {
  const { user } = React.useContext(FirebaseContext);

  const [newTesti, setNewTesti] = React.useState({
    comments: "",
    commentor_name: "",
    client_name: "",
    client_address: ""
  });

  const { comments, commentor_name, client_name, client_address } = newTesti;

  const onChange = e => {
    setNewTesti({
      ...newTesti,
      [e.target.name]: e.target.value
    });
    console.log(newTesti);
  };

  const handleSubmit = (e, addTestimonials) => {
    e.preventDefault();
    console.log(addTestimonials);
    addTestimonials().then(({ data }) => {
      console.log(data);
    });
    setNewTesti({
      comments: "",
      commentor_name: "",
      client_name: "",
      client_address: ""
    });
  };

  if (!user) {
    return <h1>Pease log in</h1>;
  } else {
    return (
      <div className="container">
        <h1 className="m-2 text-center">Add New Event</h1>
        <Mutation
          mutation={CREATE_NEW_TESTIMONIAL}
          variables={{
            comments,
            commentor_name,
            client_name,
            client_address
          }}
        >
          {(addTestimonials, { loading, error, data }) => {
            return (
              <form
                className="container coach-form p-2"
                onSubmit={e => {
                  handleSubmit(e, addTestimonials);
                }}
              >
                <div className="form-group">
                  <label htmlFor="comments">Comment</label>
                  <input
                    type="text"
                    name="comments"
                    value={comments}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="commentor_name">Commentor Name</label>
                  <input
                    type="text"
                    name="commentor_name"
                    value={commentor_name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="client_name">Client Name</label>
                  <input
                    type="text"
                    name="client_name"
                    value={client_name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="client_address">Client Address</label>
                  <input
                    type="text"
                    name="client_address"
                    value={client_address}
                    onChange={onChange}
                    required
                  />
                </div>

                <input
                  //   disabled={loading}
                  type="submit"
                  value="Submit"
                  className="btn btn-primary btn-block"
                />
              </form>
            );
          }}
        </Mutation>
      </div>
    );
  }
};
