// Tutorial: https://www.youtube.com/watch?v=SccSCuHhOw0

import express from "express";
const router = express.Router();

router.post("/play", (req, res) => {
  console.log(2324324);
  res.render("../views/404.ejs");
});

export default router;
