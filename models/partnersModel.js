const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PartnerSchema = new Schema({
  partner_name: {
    type: String,
    required: true
  },
  partner_text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("partner", PartnerSchema);
