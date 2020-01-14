import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import FirebaseContext from "./../../context/firebase/firebaseContext";
import DELETE from "../../assets/img/cancel.svg";
import { Mutation } from "react-apollo";
import "./Gallery.scss";
import DelGalleryMutation from "../../utils/DeleteGallery";
import { DELETE_GALLERY } from "../../queries";

const GalleryCards = props => {
  const { user } = React.useContext(FirebaseContext);

  const { id, gallery_name, gallery_date } = props.gallery;
  console.log("Galelry", props);

  const handleDel = (e, deleteGallery) => {
    deleteGallery().then(({ data }) => {
      console.log(data);
    });
  };
  return (
    <div className="cards g-card">
      <div className="gal-header">
        <h2 className="text-center g-name">{gallery_name}</h2>
        {user ? (
          <Mutation mutation={DELETE_GALLERY} variables={{ id }}>
            {(deleteGallery, { loading, data, error }) => {
              return (
                <div className="del-btn">
                  <i onClick={e => handleDel(e, deleteGallery)}>
                    <img src={DELETE} alt="delete" />
                  </i>
                </div>
              );
            }}
          </Mutation>
        ) : null}
      </div>

      <h4 className="text-center g-date">
        <Moment format="DD-MMM-YYYY">{gallery_date}</Moment>
        <Link to={`/gallery-images/${id}`}>
          <button className="gallery-buttons">View Gallery</button>
        </Link>
        {user ? (
          <Link to={`/admin/add-gallery-link/${id}`}>
            <button className="gallery-buttons">Add Link</button>
          </Link>
        ) : null}
      </h4>
    </div>
  );
};

export default GalleryCards;
