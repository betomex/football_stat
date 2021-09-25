import axios from "axios";

export const instance = axios.create({
  headers: {
    'X-Auth-Token': '653222211f444a6cb96255807df1e79d'
  },
  baseURL: 'http://api.football-data.org/v2/',
});

export const footballAPI = {
  getLeagues() {
    return instance.get(`competitions/`).then(r => r.data);
  }
}