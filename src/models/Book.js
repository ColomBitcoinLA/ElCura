const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    coverImage: { type: String, required: true },
    contentPages: [{ type: String, required: true }],
    audioUrl: { type: String },
    videoUrl: { type: String },
    isPremium: { type: Boolean, default: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
