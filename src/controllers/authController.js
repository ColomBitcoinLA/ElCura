const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { createAccessToken, createRefreshToken } = require("../utils/tokens");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: "El email ya está registrado" });
    }

    const hashed = await bcrypt.hash(password, 12);
    const user = await User.create({ name, email, password: hashed });
    const accessToken = createAccessToken({ id: user._id });
    const refreshToken = createRefreshToken({ id: user._id });

    user.refreshTokens.push(refreshToken);
    await user.save();

    res.status(201).json({
      user: { id: user._id, name: user.name, email: user.email, subscriptionType: user.subscriptionType },
      accessToken,
      refreshToken
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !user.password) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    const accessToken = createAccessToken({ id: user._id });
    const refreshToken = createRefreshToken({ id: user._id });
    user.refreshTokens.push(refreshToken);
    await user.save();

    res.json({
      user: { id: user._id, name: user.name, email: user.email, subscriptionType: user.subscriptionType },
      accessToken,
      refreshToken
    });
  } catch (error) {
    next(error);
  }
};

const refresh = async (req, res, next) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken) {
      return res.status(400).json({ message: "Refresh token requerido" });
    }

    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(payload.id);
    if (!user || !user.refreshTokens.includes(refreshToken)) {
      return res.status(401).json({ message: "Refresh token inválido" });
    }

    const accessToken = createAccessToken({ id: user._id });
    res.json({ accessToken });
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, refresh };
