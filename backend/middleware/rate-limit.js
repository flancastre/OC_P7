const rateLimit = require("express-rate-limit");

module.exports = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 6,
  handler: function (req, res, next) {
    return res
      .status(429)
      .json({
        error: "Vous avez envoyé trop de requêtes, attendez une minute",
      });
  },
});
