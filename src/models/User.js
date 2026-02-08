const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    subscriptionType: {
      type: String,
      enum: ["free", "premium", "lifetime"],
      default: "free"
    },
    oauthProvider: { type: String, default: null },
    refreshTokens: [{ type: String }]
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = mongoose.model("User", userSchema);
