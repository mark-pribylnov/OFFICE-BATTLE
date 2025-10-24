// Tutorial: https://www.youtube.com/watch?v=_7UQPve99r4

import express from "express";
import dotenv from "dotenv";
import Player from "./models/player.models.js";
import mongoose from "mongoose";

import apiRouter from "./routes/api.routes.js";
import viewsRouter from "./routes/view.routes.js";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV !== "production") dotenv.config();

const app = express();
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", apiRouter);
app.use("/", viewsRouter);

mongoose.connect(process.env.ATLAS_URL);

const db = mongoose.connection;

db.on("error", error => console.log(error));
db.once("open", () => console.log("Connected to Mongoose"));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
async function addPlayer(name) {
  const player = await Player.create({ name: name });
  await player.save();
}

async function reloadPlayers() {
  const players = await getAllPlayers();

  if (players.length > 2) {
    await deleteAllPlayers();
    await addPlayer("Vlad");
    await addPlayer("Mark");
  }
}
reloadPlayers();

async function getAllPlayers() {
  const players = await Player.find({});
  return players;
}

// getAllPlayers();

async function deleteAllPlayers() {
  await Player.deleteMany({});
}

// deleteAllPlayers();

// About middleware
// https://youtu.be/SccSCuHhOw0?si=6F7zNtccQASV00-5&t=1460
function logger(req, res, next) {
  // console.log(req.originalUrl);
  next();
}

app.use((req, res) => {
  res.status(404).render("404");
});
