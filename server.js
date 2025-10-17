// Tutorial: https://www.youtube.com/watch?v=qj2oDkvc4dQ&list=PLZlA0Gpn_vH8jbFkBjOuFjhxANC63OmXM&index=5

import dotenv from "dotenv";
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from "path";
import { fileURLToPath } from "url";
import indexRouter from "./routes/index.js";
import mongoose from "mongoose";
import { nextTick } from "process";

if (process.env.NODE_ENV !== "production") dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// we use the layout for all the html files so we don't dublicate the same part of each page (header, footer )
app.set("layout", "layouts/layout");
app.use(expressEjsLayouts);
app.use(express.static("public"));

// "/" says "very root of the application"
app.use("/", indexRouter);
// Parse form data and JSON (FROM DEEPSEEK)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect MongoDB.
// We never actually want to hard code the connection because changes. When you're developing we want mongoose to connect to our local MongoDB server.
// When we have the application deployed, we want to connect to a server that's on the web somewhere.
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("Connected to Mongoose"));

// Error handling (FROM DEEPSEEK)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Something broke!");
});

// we pull PORT from an environment variable. The server is going to tell what port he is listening to, not us. We use 3000 for development.
app.listen(process.env.PORT || 3000);

// Then we don't put routes here. We put them in ROUTES folder.
// Most people in NodeJS and Express refer to controller as routes, but you can think of them as exactly the same thing.
// https://youtu.be/qj2oDkvc4dQ?si=S9vz1BK5aBLFeIGj&t=325 here about this naming thing.
