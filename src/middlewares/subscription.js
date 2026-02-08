const requireSubscription = (allowed = ["premium", "lifetime"]) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "Autenticación requerida" });
    }

    if (!allowed.includes(req.user.subscriptionType)) {
      return res.status(403).json({ message: "Suscripción requerida" });
    }

    next();
  };
};

module.exports = { requireSubscription };
