/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/src/scss/main.scss":
/*!***********************************!*\
  !*** ./public/src/scss/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./public/src/js/main.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./public/src/scss/main.scss");
// import "../styles/scss/main.scss";

// const socket = io("http://localhost:3000");

// socket.on("connect", () => {
//   console.log("Connected with socket ID:", socket.id);
// });
// import { test } from "./test.js";

// console.log("Hey");
// test(1, 2);



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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44N2M0MTIwYzdiNmRhNjQ3NWU4OC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osWUFBWSxPQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQzJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxHQUFHO0FBQzdDO0FBQ0EsZUFBZSxvQ0FBb0M7QUFDbkQsMkJBQTJCLGNBQWM7QUFDekMsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29mZmljZS1iYXR0bGUvLi9wdWJsaWMvc3JjL3Njc3MvbWFpbi5zY3NzIiwid2VicGFjazovL29mZmljZS1iYXR0bGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2ZmaWNlLWJhdHRsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29mZmljZS1iYXR0bGUvLi9wdWJsaWMvc3JjL2pzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGltcG9ydCBcIi4uL3N0eWxlcy9zY3NzL21haW4uc2Nzc1wiO1xyXG5cclxuLy8gY29uc3Qgc29ja2V0ID0gaW8oXCJodHRwOi8vbG9jYWxob3N0OjMwMDBcIik7XHJcblxyXG4vLyBzb2NrZXQub24oXCJjb25uZWN0XCIsICgpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB3aXRoIHNvY2tldCBJRDpcIiwgc29ja2V0LmlkKTtcclxuLy8gfSk7XHJcbi8vIGltcG9ydCB7IHRlc3QgfSBmcm9tIFwiLi90ZXN0LmpzXCI7XHJcblxyXG4vLyBjb25zb2xlLmxvZyhcIkhleVwiKTtcclxuLy8gdGVzdCgxLCAyKTtcclxuXHJcbmltcG9ydCBcIi4uL3Njc3MvbWFpbi5zY3NzXCI7XHJcblxyXG5jb25zdCBGT1JNID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1mb3JtXCIpO1xyXG5jb25zdCBTQ09SRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtcGxheWVyLXNjb3JlXCIpKTtcclxuY29uc3QgTkFNRVMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtcGxheWVyLW5hbWVcIikpO1xyXG5cclxuRk9STS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIGUgPT4ge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgaGFuZGxlU3VibWl0KCk7XHJcbn0pO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUGxheWVycygpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvcGxheWVyc1wiKTtcclxuICBjb25zdCBwbGF5ZXJzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICByZXR1cm4gcGxheWVycztcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XHJcbiAgLy8gbWluIGFuZCBtYXggaW5jbHVkZWRcclxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGxheWVyU2NvcmVfaW5EQihpZCwgc2NvcmUpIHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9wbGF5ZXJzLyR7aWR9YCwge1xyXG4gICAgbWV0aG9kOiBcIlBBVENIXCIsXHJcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNjb3JlOiBzY29yZSB9KSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgdXBkYXRlZFBsYXllciA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHVwZGF0ZWRQbGF5ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoYW5nZVBsYXllclNjb3JlX2ZvckNsaWVudChwbGF5ZXJJRCwgbmV3U2NvcmUpIHtcclxuICBTQ09SRVMuZm9yRWFjaChzY29yZSA9PiB7XHJcbiAgICBpZiAoc2NvcmUuZGF0YXNldC5wbGF5ZXJJZCA9PT0gcGxheWVySUQpIHtcclxuICAgICAgc2NvcmUudGV4dENvbnRlbnQgPSBuZXdTY29yZTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xyXG4gIGNvbnN0IHBsYXllcnNJZHMgPSBTQ09SRVMubWFwKGVsID0+IGVsLmRhdGFzZXQucGxheWVySWQpO1xyXG4gIGNvbnN0IHdpbm5lcklkID0gcGxheWVyc0lkc1tnZXRSYW5kb21OdW1iZXIoMCwgcGxheWVyc0lkcy5sZW5ndGggLSAxKV07XHJcbiAgY29uc3Qgd2lubmVyU2NvcmUgPSBOdW1iZXIoU0NPUkVTLmZpbmQoZWwgPT4gZWwuZGF0YXNldC5wbGF5ZXJJZCA9PT0gd2lubmVySWQpLnRleHRDb250ZW50KSArIDE7XHJcbiAgY2hhbmdlUGxheWVyU2NvcmVfZm9yQ2xpZW50KHdpbm5lcklkLCB3aW5uZXJTY29yZSk7XHJcbiAgdXBkYXRlUGxheWVyU2NvcmVfaW5EQih3aW5uZXJJZCwgd2lubmVyU2NvcmUpO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==