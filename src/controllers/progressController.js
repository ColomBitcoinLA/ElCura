const ReadingProgress = require("../models/ReadingProgress");

const getProgress = async (req, res, next) => {
  try {
    const progress = await ReadingProgress.findOne({
      userId: req.user._id,
      bookId: req.params.bookId
    });
    res.json(progress || { currentPage: 1, highlights: [] });
  } catch (error) {
    next(error);
  }
};

const updateProgress = async (req, res, next) => {
  try {
    const { currentPage, highlights } = req.body;
    const progress = await ReadingProgress.findOneAndUpdate(
      { userId: req.user._id, bookId: req.params.bookId },
      { currentPage, highlights },
      { new: true, upsert: true }
    );
    res.json(progress);
  } catch (error) {
    next(error);
  }
};

module.exports = { getProgress, updateProgress };
