const express = require("express");
const { body } = require("express-validator");
const { authenticate } = require("../middlewares/auth");
const { validate } = require("../middlewares/validate");
const { getProgress, updateProgress } = require("../controllers/progressController");

const router = express.Router();

router.get("/:bookId", authenticate, getProgress);

router.put(
  "/:bookId",
  authenticate,
  [
    body("currentPage").isInt({ min: 1 }),
    body("highlights").optional().isArray()
  ],
  validate,
  updateProgress
);

module.exports = router;
