const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SportsSchema = new Schema({
  sport_name: {
    type: String,
    required: true
  },
  coach: [
    {
      type: Schema.Types.ObjectId,
      ref: "coach"
    }
  ],
  event: [
    {
      type: Schema.Types.ObjectId,
      ref: "event"
    }
  ]
});

module.exports = mongoose.model("sport", SportsSchema);
