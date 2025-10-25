export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); // min and max included
}

// model was Player from player.models.js
export async function addPlayer(model, name) {
  const player = await model.create({ name: name });
  await player.save();
}

export async function deleteAllPlayers(model) {
  await model.deleteMany({});
}

// About middleware -> https://youtu.be/SccSCuHhOw0?si=6F7zNtccQASV00-5&t=1460
function logger(req, res, next) {
  // console.log(req.originalUrl);
  next();
}

// export async function getAllPlayers() {
//   const res = await fetch("/api/players");
//   const players = await res.json();
//   return players;
// }
//
// |
// | WARNING DUPLICATE
// ↓
export async function getAllPlayers(model) {
  const players = await model.find({});
  return players;
}
