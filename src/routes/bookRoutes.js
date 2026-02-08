const express = require("express");
const { body } = require("express-validator");
const { listBooks, getBook, createBook } = require("../controllers/bookController");
const { authenticate } = require("../middlewares/auth");
const { validate } = require("../middlewares/validate");

const router = express.Router();

router.get("/", listBooks);
router.get("/:id", getBook);

router.post(
  "/",
  authenticate,
  [
    body("title").notEmpty(),
    body("description").notEmpty(),
    body("coverImage").notEmpty(),
    body("contentPages").isArray({ min: 1 })
  ],
  validate,
  createBook
);

module.exports = router;
