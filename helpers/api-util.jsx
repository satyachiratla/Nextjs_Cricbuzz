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

import { getAllPlayers } from "../players";
import { getAsiaMatches } from "../asia_matches";
import { getWorldMatches } from "../world_matches";

export async function getAsiaId(id) {
  const asiaMatches = await getAsiaMatches;
  return asiaMatches.find((event) => event.id === id);
}

export async function getWorldId(id) {
  const worldMatches = await getWorldMatches;
  return worldMatches.find((event) => event.id === id);
}

export async function getPlayerById(id) {
  const players = await getAllPlayers;
  return players.find((player) => player.id === id);
}
