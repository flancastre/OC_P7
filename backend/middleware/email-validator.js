const emailValidator = require("email-validator");

const validEmail = (req, res, next) => {
  const userEmail = req.body.email;
  if (!emailValidator.validate(userEmail)) {
    return res.status(400).json({ error: "Adresse mail invalide" });
  } else {
    next();
  }
};

module.exports = validEmail;
