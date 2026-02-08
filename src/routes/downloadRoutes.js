const express = require("express");
const { authenticate } = require("../middlewares/auth");
const { requireSubscription } = require("../middlewares/subscription");
const Book = require("../models/Book");

const router = express.Router();

router.get("/:id", authenticate, requireSubscription(), async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    if (!book.audioUrl && !book.videoUrl) {
      return res.status(404).json({ message: "No hay archivos para descargar" });
    }
    res.json({
      pdfUrl: book.isPremium ? book.coverImage : null,
      audioUrl: book.audioUrl || null,
      videoUrl: book.videoUrl || null
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
