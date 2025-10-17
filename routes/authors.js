import express from "express";
import Author from "../models/author.js";

const router = express.Router();

// All authors route
router.get("/", (req, res) => {
  res.render("authors/index");
});

// New author route
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
  // we create a new author BUT this doesn't save anything to the database but it does create an author which we can use to save, delete, update things inside of the database
  // Explanation: https://youtu.be/esy4nRuShl8?si=XSG_exmlAEpb4sCc&t=595
});

// Create author route
router.post("/", async (req, res) => {
  // old for testing
  // res.send("Create");
  //
  // Send the input's value. Old for testing
  // res.send(req.body.name);
  //
  // Explanatoin of below part: https://youtu.be/esy4nRuShl8?si=-ZEXGrzrpxMuKMcQ&t=988
  const author = new Author({
    name: req.body.name,
  });

  try {
    // Currently we don't have this newAuthor page implemente, so let's comment this out and implement it later
    // const newAuthor = await author.save();
    // res.redirect(`authors/${newAuthor.id}`);

    // res.send(req.body.name);
    res.redirect(`authors`);
  } catch {
    res.render("authors/new", { author: author, errorMessage: "Error creating Author" });
  }
});

export default router;
