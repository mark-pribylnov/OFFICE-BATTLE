import { changePlayerScore_forClient } from "./utils/helpers.js";

export const socket = io();
export let mySocketId = null;

socket.on("connect", () => {
  mySocketId = socket.id;
});

socket.on("all_clients_update_one_player_score", data => {
  if (data.socketId_emitter === mySocketId) return; // don't update my own score

  const { winnerId, winnerScore } = data.winner;
  changePlayerScore_forClient(winnerId, winnerScore);
});
