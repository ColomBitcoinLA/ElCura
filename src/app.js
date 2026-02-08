const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const morgan = require("morgan");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const bookRoutes = require("./routes/bookRoutes");
const progressRoutes = require("./routes/progressRoutes");
const downloadRoutes = require("./routes/downloadRoutes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "*",
    credentials: true
  })
);
app.use(express.json({ limit: "2mb" }));
app.use(mongoSanitize());
app.use(xss());
app.use(morgan("dev"));
app.use(passport.initialize());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false
});

app.use("/api", apiLimiter);
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/progress", progressRoutes);
app.use("/api/downloads", downloadRoutes);

app.get("/", (req, res) => {
  res.json({ status: "El Cura API ok" });
});

app.use(errorHandler);

module.exports = app;
