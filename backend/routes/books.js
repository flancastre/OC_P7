const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");

const auth = require("../middleware/auth");

const booksCtrl = require("../controllers/books");

router.get("/", booksCtrl.getAllBook);
router.post("/", auth, multer, booksCtrl.createBook);
router.get("/bestrating", booksCtrl.getBestRatingBook);
router.get("/:id", booksCtrl.getOneBook);
router.put("/:id", auth, multer, booksCtrl.modifyBook);
router.delete("/:id", auth, booksCtrl.deleteBook);
router.post("/:id/rating", auth, booksCtrl.rateBook);

module.exports = router;
