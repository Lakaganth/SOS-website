const Coach = require("../models/coachModel");
const Sport = require("../models/sportsModel");
const Testimonial = require("../models/testimonialModel");
const Event = require("../models/eventsModel");
const Partner = require("../models/partnersModel");
const Gallery = require("../models/galleryModel");
const GalleryImages = require("../models/galleryImagesModel");

const {
  GraphQLDate,
  GraphQLDateTime,
  GraphQLTime
} = require("graphql-iso-date");

const { URLResolver } = require("graphql-scalars");

const DataLoader = require("dataloader");

module.exports = {
  Date: GraphQLDate,
  Time: GraphQLTime,
  DateTime: GraphQLDateTime,
  createCoach: async ({ coachInput }, req) => {
    const {
      coach_first_name,
      coach_last_name,
      coach_email,
      coach_sport,
      coach_img,
      coach_desc
    } = coachInput;

    const existingCoach = await Coach.findOne({ coach_email: coach_email });

    if (existingCoach) {
      const error = new Error("Coach Already exists");
      throw error;
    }

    const existingSport = await Sport.findOne({
      sport_name: coach_sport.toLowerCase()
    });

    const newCoach = new Coach({
      coach_first_name: coach_first_name,
      coach_last_name: coach_last_name,
      coach_email: coach_email,
      coach_sport: coach_sport,
      coach_img: coach_img,
      coach_desc: coach_desc
    });

    const coach = await newCoach.save();

    if (existingSport) {
      console.log("hello", existingSport.coach);
      existingSport.coach.push(coach._id.toString());
      await existingSport.save();
      console.log("hello11", existingSport.coach);
      coach.sport = existingSport._id;
    } else {
      const sport_name = coach_sport.toLowerCase();

      const newSport = new Sport({
        sport_name
      });

      const sport = await newSport.save();
      console.log("world", coach._id);
      sport.coach.push(coach._id.toString());
      await sport.save();
      coach.sport = sport._id;
    }

    await coach.save();

    return { ...coach._doc, _id: coach._id.toString() };
  },

  coaches: async () => {
    try {
      const coaches = await Coach.find().populate("sport");

      return coaches.map(coach => {
        return {
          ...coach._doc,
          _id: coach._id.toString()
        };
      });
    } catch (err) {
      console.log(err);
    }
  },

  coach: async ({ id }) => {
    try {
      const coach = await Coach.findById(id);

      return {
        ...coach._doc,
        _id: coach._id.toString()
      };
    } catch (err) {
      console.log(err);
    }
  },

  updateCoach: async ({ id, coachInput }, req) => {
    const {
      coach_first_name,
      coach_last_name,
      coach_email,
      coach_sport
    } = coachInput;
    const coach = await Coach.findById(id);

    if (!coach) {
      const error = new Error("No coach Found");
      error.code = 404;
      throw error;
    }
    coach.coach_first_name = coach_first_name;
    coach.coach_last_name = coach_last_name;
    coach.coach_email = coach_email;
    coach.coach_sport = coach_sport;

    const updatedCoach = await coach.save();

    return {
      ...updatedCoach._doc,
      _id: updatedCoach._id.toString()
    };
  },

  deleteCoach: async ({ id }, req) => {
    const coach = await Coach.findById(id);

    const delsport = coach.sport._id;
    const coachID = coach._id.toString();

    const sport = await Sport.findById(delsport);

    const coacharr = sport.coach.filter(c => c != coachID);

    console.log(coacharr);

    sport.coach = coacharr;

    await sport.save();

    await Coach.findByIdAndRemove(id);

    return true;
  },

  createSport: async ({ sportInput }, req) => {
    const { sport_name } = sportInput;
    const sportName = sport_name.toLowerCase();
    const existingSport = await Sport.findOne({ sport_name: sportName });

    if (existingSport) {
      const error = new Error("Sport Already exists");
      throw error;
    }

    const newSport = new Sport({
      sport_name: sportName
    });

    const sport = await newSport.save();

    return { ...sport._doc, _id: sport._id.toString() };
  },
  sports: async () => {
    try {
      const sports = await Sport.find().populate("coach");

      return sports.map(sport => {
        return {
          ...sport._doc,
          _id: sport._id.toString()
        };
      });
    } catch (err) {
      console.log(err);
    }
  },

  sport: async ({ id }) => {
    try {
      const sport = await Sport.findById(id).populate("coach");

      return {
        ...sport._doc,
        _id: sport._id.toString()
      };
    } catch (err) {
      console.log(err);
    }
  },
  addCoachToSport: async ({ coachToSportInput }, req) => {
    const { coach_id, sport_id } = coachToSportInput;

    const coach = await Coach.findById(coach_id);

    const sport = await Sport.findById(sport_id);

    sport.coach.map(c => {
      console.log(c);
      if (c == coach_id) {
        const error = new Error("Coach Already exists");
        throw error;
      }
    });
    sport.coach.push(coach);

    await sport.save();

    return {
      ...sport._doc,
      _id: sport._id.toString()
    };
  },

  addTestimonials: async ({ testimonialInput }, req) => {
    const {
      comments,
      commentor_name,
      client_name,
      client_address
    } = testimonialInput;

    const newTestimonial = new Testimonial({
      comments,
      commentor_name,
      client_name,
      client_address
    });

    const testimonial = await newTestimonial.save();

    return testimonial;
  },

  testimonials: async () => {
    try {
      const testimonials = await Testimonial.find().sort({
        created_date: "desc"
      });

      return testimonials;
    } catch (err) {
      console.log(err);
    }
  },

  deleteTestimonials: async ({ id }, req) => {
    console.log(typeof id);

    const test = await Testimonial.findById(id);

    console.log("Hello", test);

    await Testimonial.findByIdAndRemove(id);

    return true;
  },

  createEvent: async ({ eventInput }, req) => {
    const {
      event_name,
      rules,
      reg_rules,
      event_date,
      reg_open,
      reg_close,
      sport_name
    } = eventInput;

    const sport = await Sport.findOne({ sport_name: sport_name.toLowerCase() });

    const newEvent = new Event({
      event_name,
      rules,
      reg_rules,
      event_date,
      reg_open,
      reg_close,
      sport_name,
      sport: sport._id
    });

    sport.event.push(newEvent);

    await sport.save();

    const event = await newEvent.save();

    return {
      ...event._doc,
      _id: event._id.toString(),
      event_date: event.event_date.toISOString(),
      create_date: event.create_date.toISOString()
    };
  },

  events: async () => {
    try {
      const events = await Event.find().populate("sport");

      return events;
    } catch (err) {
      console.log(err);
    }
  },

  event: async ({ id }) => {
    try {
      const event = await Event.findById(id).populate("sport");

      return event;
    } catch (err) {
      console.log(err);
    }
  },

  deleteEvent: async ({ id }, req) => {
    const delEvent = await Event.findById(id);

    const sportToDeleteID = delEvent.sport._id.toString();

    const sport = await Sport.findById(sportToDeleteID);

    const eventArr = sport.event.filter(e => e != id);

    sport.event = eventArr;

    await sport.save();

    await Event.findByIdAndRemove(id);

    return true;
  },
  createPartner: async ({ partnerInput }, req) => {
    const { partner_name, partner_text } = partnerInput;

    const newPartner = new Partner({
      partner_name,
      partner_text
    });

    await newPartner.save();

    return newPartner;
  },

  partners: async () => {
    const partners = await Partner.find();

    return partners;
  },

  createGallery: async ({ newGalleryInput }) => {
    const { gallery_name, gallery_description, gallery_date } = newGalleryInput;

    console.log(gallery_name, gallery_description, gallery_date);

    const newGallery = new Gallery({
      gallery_name,
      gallery_description,
      gallery_date
    });

    const gallery = await newGallery.save();

    return gallery;
  },
  createGalleryLinks: async ({ galleryInput }) => {
    const { gallery_id, gallery_image_link } = galleryInput;

    const addToGallery = await Gallery.findById(gallery_id);

    const newGalleryImage = new GalleryImages({
      gallery_image_link: gallery_image_link,
      gallery: gallery_id
    });

    addToGallery.galleryImages.push(newGalleryImage._id);

    await newGalleryImage.save();

    const gallery = await addToGallery.save();

    return newGalleryImage;
  },

  gallery: async ({ id }, req) => {
    try {
      const gallery = await Gallery.findById(id).populate("galleryImages");

      return gallery;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },

  galleries: async () => {
    try {
      const gallery = await Gallery.find().populate("galleryImages");

      return gallery;
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
  deleteGallery: async ({ id }) => {
    const delGallery = await Gallery.findById(id);

    delGallery.galleryImages.map(async dg => {
      const delGalleryLinks = await GalleryImages.findByIdAndRemove(dg);
    });

    const delGalleryREm = await Gallery.findByIdAndRemove(id);

    return true;
  },

  deleteGalleryLink: async ({ id }) => {
    const delGalleryLink = await GalleryImages.findById(id);

    const delGallery = delGalleryLink.gallery._id;

    const gallery = await Gallery.findById(delGallery);

    const newGallery = gallery.galleryImages.filter(g => g != id);

    gallery.galleryImages = newGallery;
    await gallery.save();

    await GalleryImages.findByIdAndRemove(id);

    return true;
  }
};
