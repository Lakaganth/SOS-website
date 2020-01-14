import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";

import "./Gallery.scss";

const GalleryImageCard = props => {
  const { gallery_image_link } = props.imagelink;
  console.log(gallery_image_link);
  return (
    <Gallery index={0}>
      <GalleryImage src={gallery_image_link} />
    </Gallery>
  );
};

export default GalleryImageCard;
