import React from "react";
import { graphql } from "react-apollo";
import { Mutation } from "react-apollo";
import { DELETE_GALLERY } from "../queries";

const DeleteGallery = props => {
  const { id } = props;
  console.log(id);
  return (
    <Mutation mutation={DELETE_GALLERY} variables={{ id }}>
      {(deleteGallery, { loading, data, error }) => {
        deleteGallery().then(({ data }) => {
          console.log(data);
        });
      }}
    </Mutation>
  );
};

const DelGalleryMutation = graphql(DELETE_GALLERY)(DeleteGallery);

export default DelGalleryMutation;
