import axios from "axios";

export const instance = axios.create({
  headers: {
    'X-Auth-Token': '653222211f444a6cb96255807df1e79d'
  },
  baseURL: 'http://api.football-data.org/v2/',
});

export const footballAPI = {
  getLeagues() {
    return instance.get(`competitions`).then(r => r.data.competitions);
  },
  getTeams() {
    const areas = [2032, 2072, 2077, 2081, 2088, 2144, 2163, 2187, 2220, 2224, 2267]
    return instance.get(`teams/?areas=${areas}`).then(r => r.data.teams);
  }
}