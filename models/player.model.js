import mongoose from "mongoose";

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Player name is required"],
    },
    score: {
      type: Number,
      default: 0,
      required: [true, "Player score is required"],
    },
  },
  { timestamps: true }
);

const Player = mongoose.model("Player", playerSchema);
// It creates a "players" collection  (note the plural form). First letter is lowercase, adds "s" at the end to make it plural.

export default Player;
