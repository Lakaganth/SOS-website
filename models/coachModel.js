const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CoachSchema = new Schema({
  coach_first_name: {
    type: String,
    required: true
  },
  coach_last_name: {
    type: String,
    required: true
  },
  coach_email: {
    type: String,
    required: true
  },
  coach_sport: {
    type: String,
    required: true
  },
  coach_img: {
    type: String
  },
  coach_desc: {
    type: String
  },
  sport: {
    type: Schema.Types.ObjectId,
    ref: "sport"
  }
});

module.exports = mongoose.model("coach", CoachSchema);
