const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GallerySchema = new Schema({
  gallery_name: {
    type: String,
    required: true
  },
  gallery_description: {
    type: String,
    required: true
  },
  gallery_date: {
    type: Date
  },
  galleryImages: [
    {
      type: Schema.Types.ObjectId,
      ref: "galleryImage"
    }
  ],

  create_date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("gallery", GallerySchema);
