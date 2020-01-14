const { buildSchema } = require("graphql");
const {
  GraphQLDate,
  GraphQLDateTime,
  GraphQLTime
} = require("graphql-iso-date");

module.exports = buildSchema(`

scalar URL

input GalleryInputData {
    gallery_id: ID!
    gallery_image_link: URL
}

input NewGalleryInputData{
    gallery_name: String!
    gallery_description: String!
    gallery_date: Date
}


type GalleryImage {
    id:ID!
    gallery_image_link: URL
    gallery: Gallery
}

type Gallery {
    id: ID!
    gallery_name: String!
    gallery_description: String!
    galleryImages: [GalleryImage]
    create_date: Date
    gallery_date: Date
}

input PartnerInputData {
    partner_name: String!
    partner_text: String!
}

type Partner{
    id: ID!
    partner_name: String!
    partner_text: String!
}

scalar Date
scalar Time
scalar DateTime

input EventInputData {
    event_name: String!
    rules : String!
    reg_rules: String!
    event_date: Date
    reg_open: Date
    reg_close: DateTime
    sport_name: String!
    
}

type Event {
    _id: ID!
    event_name: String!
    rules : String!
    reg_rules: String!
    event_date:Date
    create_date: Date
    reg_open: Date
    reg_close: DateTime
    sport_name: String
    sport: Sport
}

input TestimonialInputData{
    comments: String!
    commentor_name: String!
    client_name: String!
    client_address: String!
}

type Testimonial {
    _id: ID!
    comments: String!
    commentor_name: String!
    client_name: String!
    client_address: String!
    created_date: Date!
}

input SportInputData{
  sport_name: String!
}


type Sport {
    _id: ID!
    sport_name: String!
    coach: [Coach!]!
}

type Coach {
    _id: ID! 
    coach_first_name: String!
    coach_last_name: String!
    coach_email: String!
    coach_sport: String!
    coach_img: String
    coach_desc: String
    sport: Sport
    }

input CoachToSportData{
    coach_id: ID!
    sport_id: ID!
}

input CoachInputData{
    coach_first_name: String!
    coach_last_name: String!
    coach_email: String!
    coach_sport: String!  
    coach_img: String
    coach_desc: String
}


type RootMutation{

    createCoach(coachInput: CoachInputData): Coach!
    updateCoach(id: ID!, coachInput: CoachInputData): Coach!
    deleteCoach(id:ID!): Boolean
    createSport(sportInput: SportInputData): Sport!
    deleteSport(id: ID!): Boolean!
    addCoachToSport(coachToSportInput: CoachToSportData): Sport!
    addTestimonials(testimonialInput: TestimonialInputData!): Testimonial!
    deleteTestimonials(id: ID!) : Boolean!
    createEvent(eventInput: EventInputData): Event!
    deleteEvent(id:ID!): Boolean!
    createPartner(partnerInput: PartnerInputData): Partner!
    createGallery(newGalleryInput: NewGalleryInputData): Gallery!
    createGalleryLinks(galleryInput: GalleryInputData): GalleryImage!
    deleteGallery(id: ID!): Boolean!
    deleteGalleryLink(id: ID!): Boolean!
}

type RootQuery {
    coaches: [Coach!]!
    coach(id: ID!): Coach
    sports:[Sport!]!
    sport(id:ID!): Sport
    testimonials: [Testimonial!]!
    events: [Event!]!
    event(id:ID!): Event!
    partners: [Partner!]!
    galleries: [Gallery!]!
    gallery(id: ID!): Gallery!

 
    
}

schema{
    query: RootQuery
    mutation: RootMutation
}

`);
