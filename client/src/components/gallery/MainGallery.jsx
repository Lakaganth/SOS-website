import React from "react";
import { Query } from "react-apollo";
import { ALL_GALLERY_QUERY } from "../../queries";
import GalleryCards from "./GalleryCards";

const MainGallery = () => {
  return (
    <div className=" gallery-card">
      <Query query={ALL_GALLERY_QUERY}>
        {({ data, loading, error }) => {
          if (loading) {
            return <h4>Loading ....</h4>;
          }
          if (error) return console.log(error);

          const { galleries } = data;

          return galleries.map(g => <GalleryCards key={g.id} gallery={g} />);
        }}
      </Query>
    </div>
  );
};

export default MainGallery;
