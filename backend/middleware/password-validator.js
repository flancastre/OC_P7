const passwordValidator = require("password-validator");

const passwordSchema = new passwordValidator();
passwordSchema
  .is()
  .min(8)
  .is()
  .max(100)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces();

module.exports = (req, res, next) => {
  const userPassword = req.body.password;
  if (!passwordSchema.validate(userPassword)) {
    return res
      .status(400)
      .json({
        error: `Mot de passe trop faible ${passwordSchema.validate(
          userPassword,
          { list: true }
        )}`,
      });
  } else {
    next();
  }
};
