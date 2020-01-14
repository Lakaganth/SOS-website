import React from "react";
import { withRouter } from "react-router-dom";
import { Mutation } from "react-apollo";
import { CREATE_NEW_GALLERY_LINK } from "./../../queries/index";
import "./Gallery.scss";

const AddGalleryLinks = ({ match }) => {
  const { id } = match.params;
  console.log(id);

  const [newGLink, setNewGLink] = React.useState({
    gallery_id: "",
    gallery_image_link: ""
  });

  const { gallery_id, gallery_image_link } = newGLink;

  const onChange = e => {
    setNewGLink({
      ...newGLink,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e, createGalleryLinks) => {
    e.preventDefault();

    createGalleryLinks().then(({ data }) => {
      console.log(data);
    });
    setNewGLink({
      gallery_image_link: ""
    });
  };

  return (
    <div className="container g-add-link">
      <Mutation
        mutation={CREATE_NEW_GALLERY_LINK}
        variables={{ gallery_id: id, gallery_image_link }}
      >
        {(createGalleryLinks, { data, loading, error }) => {
          return (
            <form
              className="container coach-form p-2"
              onSubmit={e => {
                handleSubmit(e, createGalleryLinks);
              }}
            >
              <div className="form-group">
                <label htmlFor="gallery_image_link">Image Link</label>
                <input
                  type="text"
                  name="gallery_image_link"
                  value={gallery_image_link}
                  onChange={onChange}
                  required
                />
              </div>
              <input
                disabled={loading}
                type="submit"
                value="Add Image"
                className="gallery-buttons"
              />
            </form>
          );
        }}
      </Mutation>
    </div>
  );
};

export default withRouter(AddGalleryLinks);
