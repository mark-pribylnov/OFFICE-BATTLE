import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  // Test command
  // res.send("Hi there! 👋");

  res.render("index");
});

export default router;
