const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");

require("dotenv").config();

const booksRoutes = require("./routes/books");
const userRoutes = require("./routes/user");

const { cors } = require("./middleware/cors");

const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use(mongoSanitize());

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);

app.use(cors);

app.use("/api/books", booksRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
