import axios from "axios";

let config = require('../env.json')

export const instance = axios.create({
  headers: {
    'X-Auth-Token': config.API_KEY
  },
  baseURL: 'http://api.football-data.org/v2/'
});

export const footballAPI = {
  getLeagues() {
    return instance.get(`competitions`).then(r => r.data.competitions)
  },
  getTeams() {
    const areas = [2032, 2072, 2077, 2081, 2088, 2144, 2163, 2187, 2220, 2224, 2267] //По бесплатной подписке
    // доступны только текущие регионы/страны, а простой запрос `teams` выдаёт только 52 команды UK...
    return instance.get(`teams/?areas=${areas}`).then(r => r.data.teams)
  },
  getLeagueMatches() {
    return instance.get(`competitions/CL/matches`).then(r => r.data)
  },
  getTeamMatches(teamID: number) {
    return instance.get(`teams/${teamID}/matches`).then(r => r.data.matches)
  },
}