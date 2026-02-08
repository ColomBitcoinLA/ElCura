const express = require("express");
const passport = require("passport");
const { body } = require("express-validator");
const { register, login, refresh } = require("../controllers/authController");
const { validate } = require("../middlewares/validate");

const router = express.Router();

router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Nombre requerido"),
    body("email").isEmail().withMessage("Email inválido"),
    body("password").isLength({ min: 8 }).withMessage("Password mínimo 8 caracteres")
  ],
  validate,
  register
);

router.post(
  "/login",
  [body("email").isEmail(), body("password").notEmpty()],
  validate,
  login
);

router.post("/refresh", [body("refreshToken").notEmpty()], validate, refresh);

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/login" }),
  (req, res) => {
    res.json({ message: "OAuth correcto", user: req.user });
  }
);

module.exports = router;
