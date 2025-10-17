import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// Now the "table" in the database is called "Author" and it uses "authorSchema" to create new authors
export default mongoose.model("Author", authorSchema);
