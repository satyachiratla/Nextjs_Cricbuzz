"use strict";
exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 4103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hv": () => (/* binding */ getWorldId),
/* harmony export */   "in": () => (/* binding */ getPlayerById),
/* harmony export */   "z6": () => (/* binding */ getAsiaId)
/* harmony export */ });
/* harmony import */ var _players__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3491);
/* harmony import */ var _asia_matches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7018);
/* harmony import */ var _world_matches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5155);
// export async function getAsiaMatches() {
//   const asia_api = process.env.asia_matches_api_key;
//   const response = await fetch(asia_api);
//   const data = await response.json();
//   const matches = [];
//   for (const key in data) {
//     matches.push({
//       id: key,
//       ...data[key],
//     });
//   }
//   return matches;
// }
// export async function getWorldMatches() {
//   const world_api = process.env.world_matches_api_key;
//   const response = await fetch(world_api);
//   const data = await response.json();
//   const matches = [];
//   for (const key in data) {
//     matches.push({
//       id: key,
//       ...data[key],
//     });
//   }
//   return matches;
// }
// export async function getAllPlayers() {
//   const players_api = process.env.players_api_key;
//   const response = await fetch(players_api);
//   const data = await response.json();
//   const players = [];
//   for (const key in data) {
//     players.push({
//       id: key,
//       ...data[key],
//     });
//   }
//   return players;
// }



async function getAsiaId(id) {
    const asiaMatches = await _asia_matches__WEBPACK_IMPORTED_MODULE_1__/* .getAsiaMatches */ .I;
    return asiaMatches.find((event)=>event.id === id);
}
async function getWorldId(id) {
    const worldMatches = await _world_matches__WEBPACK_IMPORTED_MODULE_2__/* .getWorldMatches */ .n;
    return worldMatches.find((event)=>event.id === id);
}
async function getPlayerById(id) {
    const players = await _players__WEBPACK_IMPORTED_MODULE_0__/* .getAllPlayers */ .X;
    return players.find((player)=>player.id === id);
}


/***/ })

};
;