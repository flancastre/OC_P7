const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const validEmail = require("../middleware/email-validator");
const validPassword = require("../middleware/password-validator");
const rateLimit = require("../middleware/rate-limit");

router.post("/signup", rateLimit, validEmail, validPassword, userCtrl.signup);
router.post("/login", rateLimit, userCtrl.login);

module.exports = router;
