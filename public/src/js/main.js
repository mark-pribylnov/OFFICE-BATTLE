// import "../styles/scss/main.scss";

// const socket = io("http://localhost:3000");

// socket.on("connect", () => {
//   console.log("Connected with socket ID:", socket.id);
// });

const FORM = document.querySelector(".js-form");
const SCORES = Array.from(document.querySelectorAll(".js-player-score"));
const NAMES = Array.from(document.querySelectorAll(".js-player-name"));

FORM.addEventListener("submit", async e => {
  e.preventDefault();

  handleSubmit();
});

async function getAllPlayers() {
  const res = await fetch("/api/players");
  const players = await res.json();
  return players;
}

function getRandomNumber(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function updatePlayerScore_inDB(id, score) {
  const res = await fetch(`/api/players/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ score: score }),
  });

  const updatedPlayer = await res.json();
  return updatedPlayer;
}

function changePlayerScore_forClient(playerID, newScore) {
  SCORES.forEach(score => {
    if (score.dataset.playerId === playerID) {
      score.textContent = newScore;
    }
  });
}

function handleSubmit() {
  const playersIds = SCORES.map(el => el.dataset.playerId);
  const winnerId = playersIds[getRandomNumber(0, playersIds.length - 1)];
  const winnerScore = Number(SCORES.find(el => el.dataset.playerId === winnerId).textContent) + 1;
  changePlayerScore_forClient(winnerId, winnerScore);
  updatePlayerScore_inDB(winnerId, winnerScore);
}
