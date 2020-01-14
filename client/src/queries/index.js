import gql from "graphql-tag";

export const SPORTS_QUERY = gql`
  query {
    sports {
      sport_name
      _id
      coach {
        _id
        coach_first_name
        coach_last_name
        coach_email
        coach_sport
      }
    }
  }
`;

export const ALL_COACHES_QUERY = gql`
  query {
    coaches {
      coach_first_name
      coach_last_name
      coach_email
      coach_sport
      coach_img
      coach_desc
      _id
    }
  }
`;

export const All_EVENTS = gql`
  query {
    events {
      _id
      event_name
      rules
      reg_rules
      create_date
      reg_open
      reg_close
      event_date
      sport {
        sport_name
      }
    }
  }
`;

export const EVENT = gql`
  query event($id: ID!) {
    event(id: $id) {
      event_name
      rules
      reg_rules
      event_date
      reg_close
      reg_open
      sport {
        sport_name
      }
    }
  }
`;

export const ALL_GALLERY_QUERY = gql`
  query {
    galleries {
      id
      gallery_name
      create_date
      gallery_date
      gallery_description
    }
  }
`;

export const GET_GALLERY = gql`
  query($id: ID!) {
    gallery(id: $id) {
      id
      gallery_name
      galleryImages {
        gallery_image_link
        id
      }
    }
  }
`;

export const GET_ALL_TESTIMONIALS = gql`
  query {
    testimonials {
      _id
      comments
      commentor_name
      client_name
      client_address
      created_date
    }
  }
`;

// Mutations

export const GET_COACHES_FROM_SPORT = gql`
  query($_id: ID!) {
    sport(id: $_id) {
      sport_name
      coach {
        coach_first_name
        coach_last_name
        coach_sport
        _id
        coach_img
        coach_desc
      }
    }
  }
`;

export const CREATE_NEW_COACH_ADMIN = gql`
  mutation createCoach(
    $coach_first_name: String!
    $coach_last_name: String!
    $coach_img: String
    $coach_email: String!
    $coach_sport: String!
    $coach_desc: String
  ) {
    createCoach(
      coachInput: {
        coach_first_name: $coach_first_name
        coach_last_name: $coach_last_name
        coach_img: $coach_img
        coach_email: $coach_email
        coach_sport: $coach_sport
        coach_desc: $coach_desc
      }
    ) {
      _id
      coach_first_name
      coach_last_name
      coach_img
      coach_email
      coach_sport
      coach_desc
    }
  }
`;

export const DELETE_COACH = gql`
  mutation deleteCoach($id: ID!) {
    deleteCoach(id: $id)
  }
`;

export const CREATE_NEW_EVENT = gql`
  mutation createEvent(
    $event_name: String!
    $rules: String!
    $reg_rules: String!
    $event_date: Date
    $reg_open: Date
    $reg_close: DateTime
    $sport_name: String!
  ) {
    createEvent(
      eventInput: {
        event_name: $event_name
        rules: $rules
        reg_rules: $reg_rules
        event_date: $event_date
        reg_open: $reg_open
        reg_close: $reg_close
        sport_name: $sport_name
      }
    ) {
      event_name
      rules
      create_date
      event_date
    }
  }
`;

export const CREATE_NEW_GALLERY = gql`
  mutation createGallery(
    $gallery_name: String!
    $gallery_description: String!
    $gallery_date: Date
  ) {
    createGallery(
      newGalleryInput: {
        gallery_name: $gallery_name
        gallery_description: $gallery_description
        gallery_date: $gallery_date
      }
    ) {
      id
      gallery_name
      create_date
      gallery_date
      galleryImages {
        gallery_image_link
      }
    }
  }
`;

export const CREATE_NEW_GALLERY_LINK = gql`
  mutation createGalleryLinks($gallery_id: ID!, $gallery_image_link: URL!) {
    createGalleryLinks(
      galleryInput: {
        gallery_id: $gallery_id
        gallery_image_link: $gallery_image_link
      }
    ) {
      id
      gallery_image_link
    }
  }
`;

export const DELETE_GALLERY = gql`
  mutation deleteGallery($id: ID!) {
    deleteGallery(id: $id)
  }
`;
