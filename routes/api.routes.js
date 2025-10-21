// Tutorial: https://www.youtube.com/watch?v=SccSCuHhOw0

//  WHEN you need more routes and you'd like to group them by path like one function for all :id that handles get, post, put delete
// https://youtu.be/SccSCuHhOw0?si=OzCF6mUba7nbZOk0&t=1198
// use router.router("/:id").get(...the same code as below...).post(...).delete(...).put(...)

import express from "express";
import playersRoutes from "./api/players.routes.js";
const router = express.Router();

router.use("/players", playersRoutes);

// router.get("/", (req, res) => {
//   res.json({ users: "All users", parents: 33 });
// });

// router.get("/:idOrNameItWhateverYouWant", (req, res) => {
//   res.send(`get user by id: ${req.params.idOrNameItWhateverYouWant}`);
// });

// router.post("/", (req, res) => {
//   res.send("Create User");
// });

// router.put("/:thisID", (req, res) => {
//   res.send("update User with thisID");
// });

// router.delete("/:id", (req, res) => {
//   res.send("delete User");
// });

// You can use a middleware every time we get a route that has the :id.
// Let's say we want to get that user
//router.param(req, res, next, id) {req.user = users[id]; next()}
// and don't forget next() because this middleware rund before routes even if it's placed below in the code.

// https://youtu.be/SccSCuHhOw0?si=AP-rz0OPptUQo5dt&t=1265

export default router;
