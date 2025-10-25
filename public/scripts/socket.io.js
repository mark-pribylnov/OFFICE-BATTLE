import { changePlayerScore_forClient } from "./utils/helpers.js";

const socket = io();

socket.on("all_clients_update_one_player_score", winner => {
  const { winnerId, winnerScore } = winner;
  changePlayerScore_forClient(winnerId, winnerScore);
});

export default socket;
