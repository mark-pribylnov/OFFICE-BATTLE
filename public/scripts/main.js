const FORM = document.querySelector(".js-form");
const SCORES = Array.from(document.querySelectorAll(".js-player-score"));
const NAMES = Array.from(document.querySelectorAll(".js-player-name"));

FORM.addEventListener("submit", async e => {
  e.preventDefault();

  const players = await getAllPlayers();
  const winner = players[getRandomNumber(0, players.length - 1)];
  winner.score += 1;
  changePlayerScore_forClient(winner._id, winner.score);
  updatePlayerScore_inDB(winner._id, winner.score);
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
