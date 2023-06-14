const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");

const auth = require("../middleware/auth");

const booksCtrl = require("../controllers/books");
const optimizedImg = require("../middleware/sharp-config");

router.get("/", booksCtrl.getAllBook);
router.post("/", auth, multer, optimizedImg, booksCtrl.createBook);
router.get("/bestrating", booksCtrl.getBestRatingBook);
router.get("/:id", booksCtrl.getOneBook);
router.put("/:id", auth, multer, optimizedImg, booksCtrl.modifyBook);
router.delete("/:id", auth, booksCtrl.deleteBook);
router.post("/:id/rating", auth, booksCtrl.rateBook);

module.exports = router;
