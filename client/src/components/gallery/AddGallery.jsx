import React from "react";

import { graphql } from "react-apollo";
import { Mutation } from "react-apollo";
import { CREATE_NEW_GALLERY } from "../../queries";
import FirebaseContext from "./../../context/firebase/firebaseContext";
import history from "./../../history";

const AddGallery = props => {
  const { user } = React.useContext(FirebaseContext);
  const [newGallery, setNewGallery] = React.useState({
    gallery_name: " ",
    gallery_description: "",
    gallery_date: ""
  });

  const { gallery_name, gallery_description, gallery_date } = newGallery;

  const onChange = e => {
    setNewGallery({
      ...newGallery,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e, createGallery) => {
    e.preventDefault();
    createGallery().then(({ data }) => {
      console.log(data);
    });
    setNewGallery({
      gallery_name: " ",
      gallery_description: "",
      gallery_date: ""
    });
    history.push("/gallery");
  };

  if (!user) {
    return <h1>Pease log in</h1>;
  } else {
    return (
      <div className="container gal-form-container">
        <Mutation
          mutation={CREATE_NEW_GALLERY}
          variables={{
            gallery_name,
            gallery_description,
            gallery_date
          }}
        >
          {(createGallery, { error, loading, data }) => {
            return (
              <form
                className="container coach-form p-2"
                onSubmit={e => {
                  handleSubmit(e, createGallery);
                }}
              >
                <div className="form-group">
                  <label htmlFor="gallery_name">Gallery Name</label>
                  <input
                    type="text"
                    name="gallery_name"
                    value={gallery_name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gallery_description">Description</label>
                  <input
                    type="text"
                    name="gallery_description"
                    value={gallery_description}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gallery_date">Date of the Event</label>
                  <input
                    type="date"
                    name="gallery_date"
                    value={gallery_date}
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

const AddGalleryWithMutations = graphql(CREATE_NEW_GALLERY)(AddGallery);

export default AddGalleryWithMutations;
