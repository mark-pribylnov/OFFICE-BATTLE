// Tutorial: https://www.youtube.com/watch?v=_7UQPve99r4

import express from "express";
import dotenv from "dotenv";

if (process.env.NODE_ENV !== "production") dotenv.config();

const app = express();
app.set("view engine", "ejs");

// <----- Middleware ----->
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// <----- Routes ----->
import apiRouter from "./routes/api.routes.js";
import viewsRouter from "./routes/view.routes.js";

app.use("/api", apiRouter);
app.use("/", viewsRouter);

app.use((req, res) => {
  res.status(404).render("404");
});

// <----- Database ----->
import Player from "./models/player.models.js";
import mongoose from "mongoose";

mongoose.connect(process.env.ATLAS_URL);
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connected to Mongoose"));

// <----- Launch server ----->
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

// TODO: delete when the game allows more than 2 players
(async function reloadPlayers() {
  const { getAllPlayers } = await import("./public/scripts/utils/helpers.js");
  const players = await getAllPlayers(Player);

  if (players.length > 2) {
    const { deleteAllPlayers, addPlayer } = await import("./public/scripts/utils/helpers.js");
    await deleteAllPlayers(Player);
    await addPlayer(Player, "Vlad");
    await addPlayer(Player, "Mark");
  }
})();
