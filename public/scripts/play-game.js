import { socket, mySocketId } from "./socket.io.js";
import { getRandomNumber, updatePlayerScore_inDB, changePlayerScore_forClient } from "./utils/helpers.js";

const FORM = document.querySelector(".js-form");

FORM.addEventListener("submit", async e => {
  e.preventDefault();

  const winnerObj = handleSubmit();

  socket.emit("update_one_player_score", { winner: winnerObj, socketId_emitter: mySocketId });
});

function handleSubmit() {
  const SCORES = Array.from(document.querySelectorAll(".js-player-score"));

  const playersIds = SCORES.map(el => el.dataset.playerId);
  const winnerId = playersIds[0];
  // const winnerId = playersIds[getRandomNumber(0, playersIds.length - 1)];
  const winnerScore = Number(SCORES.find(el => el.dataset.playerId === winnerId).textContent) + 1;
  changePlayerScore_forClient(winnerId, winnerScore);
  updatePlayerScore_inDB(winnerId, winnerScore);

  return { winnerId, winnerScore };
}
