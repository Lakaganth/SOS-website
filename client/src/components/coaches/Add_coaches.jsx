import React from "react";
import FirebaseContext from "./../../context/firebase/firebaseContext";

import { graphql } from "react-apollo";
import { Mutation } from "react-apollo";
import { CREATE_NEW_COACH_ADMIN } from "../../queries";

import "./Coaches.scss";
import history from "./../../history";

const AddCoaches = props => {
  const { user } = React.useContext(FirebaseContext);
  const [newCoach, setNewCoach] = React.useState({
    coach_first_name: "",
    coach_last_name: "",
    coach_img: "",
    coach_email: "",
    coach_sport: "",
    coach_desc: ""
  });

  const onChange = e => {
    setNewCoach({
      ...newCoach,
      [e.target.name]: e.target.value
    });
  };
  const {
    coach_first_name,
    coach_last_name,
    coach_img,
    coach_email,
    coach_sport,
    coach_desc
  } = newCoach;

  const handleSubmit = (e, createCoach) => {
    e.preventDefault();
    console.log(newCoach);
    createCoach().then(({ data }) => {
      console.log(data);
    });
    // createCoach({
    //   variables: {
    //     coach_first_name,
    //     coach_last_name,
    //     coach_email,
    //     coach_sport
    //   }
    // });
    setNewCoach({
      coach_first_name: "",
      coach_last_name: "",
      coach_img: "",
      coach_email: "",
      coach_sport: "",
      coach_desc: ""
    });
    history.push("/sports");
  };

  if (!user) {
    return <h1>Pease log in</h1>;
  } else {
    console.log(user.email);
    return (
      <div className="container">
        <h1 className="m-2 text-center">Add New Coach</h1>
        <Mutation
          mutation={CREATE_NEW_COACH_ADMIN}
          variables={{
            coach_first_name,
            coach_last_name,
            coach_img,
            coach_email,
            coach_sport,
            coach_desc
          }}
        >
          {(createCoach, { data, loading, error }) => {
            return (
              <form
                className="container coach-form p-2"
                onSubmit={e => {
                  handleSubmit(e, createCoach);
                }}
              >
                <div className="form-group">
                  <label htmlFor="coach_first_name">First Name</label>
                  <input
                    type="text"
                    name="coach_first_name"
                    value={coach_first_name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="coach_last_name">Last Name</label>
                  <input
                    type="text"
                    name="coach_last_name"
                    value={coach_last_name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="coach_img">
                    Coach Avatar: please provide link
                  </label>
                  <input
                    type="text"
                    name="coach_img"
                    value={coach_img}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="coach_email">Email</label>
                  <input
                    type="email"
                    name="coach_email"
                    value={coach_email}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="coach_sport">Sport</label>
                  <input
                    type="text"
                    name="coach_sport"
                    value={coach_sport}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="coach_desc">Coach description</label>
                  <input
                    type="text"
                    name="coach_desc"
                    value={coach_desc}
                    onChange={onChange}
                    required
                  />
                </div>
                <input
                  disabled={loading}
                  type="submit"
                  value="Register"
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

const AddCoachesWithMutations = graphql(CREATE_NEW_COACH_ADMIN)(AddCoaches);

export default AddCoachesWithMutations;
