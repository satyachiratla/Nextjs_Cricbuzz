/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    asia_matches_api_key: 'https://cricbuzz-3fe09-default-rtdb.firebaseio.com/matches.json',
    world_matches_api_key: 'https://cricbuzz-3fe09-default-rtdb.firebaseio.com/worldmatches.json',
    players_api_key: 'https://cricbuzz-3fe09-default-rtdb.firebaseio.com/players.json',
    // players_api_key: "http://localhost:3000/api/players",
  }
}

module.exports = nextConfig
