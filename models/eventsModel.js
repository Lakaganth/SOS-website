const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
  event_name: {
    type: String,
    required: true
  },
  rules: {
    type: String,
    required: true
  },
  reg_rules: {
    type: String,
    required: true
  },
  event_date: {
    type: Date
  },
  reg_open: {
    type: Date
  },
  reg_close: {
    type: Date
  },
  create_date: {
    type: Date,
    default: Date.now()
  },
  sport: {
    type: Schema.Types.ObjectId,
    ref: "sport"
  }
});

module.exports = mongoose.model("event", EventsSchema);
