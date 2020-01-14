import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Mutation } from "react-apollo";

import "./sports.scss";
import FirebaseContext from "./../../context/firebase/firebaseContext";

const addSportMutation = gql`
  mutation createSport($sport_name: String!) {
    createSport(sportInput: { sport_name: $sport_name }) {
      _id
      sport_name
    }
  }
`;

const AddSport = () => {
  const { user } = React.useContext(FirebaseContext);
  const [newSport, setNewSport] = React.useState({
    sport_name: ""
  });

  const onChange = e => {
    setNewSport({
      ...newSport,
      [e.target.name]: e.target.value
    });
  };

  const { sport_name } = newSport;

  if (!user) {
    return <h1>Pease log in</h1>;
  } else {
    return (
      <Mutation mutation={addSportMutation}>
        {(createSport, { loading, error }) => (
          <div className="sport-wrapper">
            <div className="container sport-form">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  console.log(newSport);
                  createSport({
                    variables: {
                      sport_name: newSport.sport_name
                    }
                  });
                  setNewSport({
                    sport_name: ""
                  });
                }}
              >
                <div className="form-group">
                  <label htmlFor="sport_name">Sport Name</label>
                  <input
                    type="text"
                    name="sport_name"
                    value={sport_name}
                    onChange={onChange}
                    required
                  />
                </div>
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary btn-block"
                />
              </form>
              {loading && <p>Loading...</p>}
              {error && <p>Error :( Please try again</p>}
            </div>
          </div>
        )}
      </Mutation>
    );
  }
};

const AddSportWithMmutations = graphql(addSportMutation)(AddSport);

export default AddSportWithMmutations;
