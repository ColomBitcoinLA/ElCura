const mongoose = require("mongoose");

const highlightSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    page: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { _id: false }
);

const readingProgressSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
    currentPage: { type: Number, default: 1 },
    highlights: [highlightSchema]
  },
  { timestamps: true }
);

readingProgressSchema.index({ userId: 1, bookId: 1 }, { unique: true });

module.exports = mongoose.model("ReadingProgress", readingProgressSchema);
