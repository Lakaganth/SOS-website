const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestimonialSchema = new Schema({
  comments: {
    type: "string",
    required: true
  },
  commentor_name: {
    type: "string",
    required: true
  },
  client_name: {
    type: "string",
    required: true
  },
  client_address: {
    type: "string",
    required: true
  },
  created_date: {
    type: "date",
    default: Date.now()
  }
});

module.exports = mongoose.model("testimonial", TestimonialSchema);
