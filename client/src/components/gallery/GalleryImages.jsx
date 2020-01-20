import React from "react";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";
import { GET_GALLERY } from "../../queries";
// import GalleryImageCard from "./GalleryImageCard";

import { Gallery, GalleryImage } from "react-gesture-gallery";

import "./Gallery.scss";

const GalleryImages = ({ match }) => {
  const { id } = match.params;
  const [index, setIndex] = React.useState(0);

  return (
    <div className="gallery-card">
      <Query query={GET_GALLERY} variables={{ id }}>
        {({ error, data, loading }) => {
          if (loading) {
            return <h4>Loading ....</h4>;
          }
          if (error) return console.log(error);

          const { galleryImages } = data.gallery;

          return (
            <div className="gal-image-container">
              <Gallery
                className="gal"
                index={index}
                onRequestChange={i => {
                  setIndex(i);
                }}
              >
                {galleryImages.map(gl => (
                  <GalleryImage
                    key={gl.id}
                    objectFit="contain"
                    src={gl.gallery_image_link}
                  />
                ))}
              </Gallery>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default withRouter(GalleryImages);
