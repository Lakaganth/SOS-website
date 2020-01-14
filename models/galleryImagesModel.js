const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GalleryImageSchema = new Schema({
  gallery_image_link: {
    type: String,
    required: true
  },
  gallery: {
    type: Schema.Types.ObjectId,
    ref: "gallery"
  }
});

module.exports = mongoose.model("galleryImage", GalleryImageSchema);
