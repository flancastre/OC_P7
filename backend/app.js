const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const path = require("path");

const booksRoutes = require("./routes/books");
const userRoutes = require("./routes/user");

const app = express();

mongoose
  .connect(
    "mongodb+srv://flancast:flancast@cluster0.oibxvdk.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// app.use((req, res, next) => {
//   console.log("Requête reçue !");
//   next();
// });

// app.use((req, res, next) => {
//   res.status(201);
//   next();
// });

// app.use((req, res, next) => {
//   res.json({ message: "Votre requête a bien été reçue !" });
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Réponse envoyée avec succès !");
// });

// app.get("/api/books", (req, res, next) => {
//   const books = [
//     {
//       userId: "dfeevef",
//       title: "Voiture",
//       author: "toto",
//       imageUrl:
//         "https://unsplash.com/photos/p7tai9P7H-s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8dm9pdHVyZXxmcnwwfHx8fDE2ODU5NTgxODR8MA&force=true",
//       year: 2010,
//       genre: "roman",
//       ratings: [
//         {
//           userId: "fbebe",
//           grade: 5,
//         },
//       ],
//       averageRating: 5,
//     },
//     {
//       userId: "nrssrevef",
//       title: "Moto",
//       author: "titi",
//       imageUrl:
//         "https://unsplash.com/photos/-5rcxih1e44/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bW90b3xmcnwwfHx8fDE2ODU5MDY1OTV8MA&force=true",
//       year: 2000,
//       genre: "Police",
//       ratings: [
//         {
//           userId: "fdgbsbe",
//           grade: 5,
//         },
//       ],
//       averageRating: 5,
//     },
//   ];
//   res.status(200).json(books);
// });

app.use(bodyParser.json());

app.use("/api/books", booksRoutes);
app.use("/api/auth", userRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));

module.exports = app;
