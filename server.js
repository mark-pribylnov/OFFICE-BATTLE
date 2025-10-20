// Tutorial: https://www.youtube.com/watch?v=_7UQPve99r4

import express from "express";
import dotenv from "dotenv";
import Player from "./models/player.model.js";
import mongoose from "mongoose";

if (process.env.NODE_ENV !== "production") dotenv.config();

const app = express();
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    const allPlayers = await Player.find();
    res.render("index", { allPlayers });
  } catch {
    res.status(500).send("Error fetching players");
  }
});

mongoose.connect(process.env.LOCAL_DATABASE_URL);

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

async function getAllPlayers() {
  const players = await Player.find({});
  console.log(players);
  return players;
}

async function deleteAllPlayers() {
  await Player.deleteMany({});
}
