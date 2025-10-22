// Tutorial: https://www.youtube.com/watch?v=_7UQPve99r4

import express from "express";
import dotenv from "dotenv";
import Player from "./models/player.models.js";
import mongoose from "mongoose";

// import gameRouter from "./routes/game.routes.js";
// import playersRouter from "./routes/api/players.routes.js";
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
// serve static files so we can go to uerl /page1 and we get page1.html without any routes.
// AND you need it to use CSS because you files refer to e.g. main.css and without this option they're not going to find that file because we didnt'
// create a route for that URL and the server will not going to give our css to each page
// TL;DR:serving static files is the shortcut that avoids creating a separate route for every CSS, JS, or image file.
// https://youtu.be/SccSCuHhOw0?si=AcFes4s1RB4plu7x&t=1716
app.use(express.urlencoded({ extended: false }));
// allows pasring data from forms and access information coming from forms as req.body.anyParameter.
// https://youtu.be/SccSCuHhOw0?si=vAtTc6UMJEBdgX0-&t=1893
app.use(express.json());
// allow using JSON when recieving data. It does the same thing as express.urlencoded({ extended: false }) but allows us to read a JSON request.
// https://youtu.be/SccSCuHhOw0?si=Rxy2YAosBFiOgPM0&t=2083

app.use(logger); // or we can run logger only for /game - app.get("/game", logger, addAsManyAsYouWant, (req, res)=>{other code})
// Or use in on a router like router.use(logger) and every single route of that router will have the logger

// app.use("/game", gameRouter);
// app.use("/players", playersRouter);
app.use("/api", apiRouter);
app.use("/", viewsRouter);

mongoose.connect(process.env.LOCAL_DATABASE_URL);

const db = mongoose.connection;

db.on("error", error => console.log(error));
db.once("open", () => console.log("Connected to Mongoose"));

// import cron from "node-cron";
// cron.schedule("*/1 * * * * *", () => {
//   console.log("Every 1 second");
// });

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
