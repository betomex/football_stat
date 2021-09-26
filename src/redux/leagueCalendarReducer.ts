import {baseThunkType, inferActionsTypes } from "./reduxStore";
import {footballAPI} from "../api/api";
import {leagueMatchesType} from "../types/types";

type actionsType = inferActionsTypes<typeof actions>
type thunkType = baseThunkType<actionsType>

let initialState = {
  matches: null as leagueMatchesType | null
};

const leagueCalendarReducer = (state = initialState, action: actionsType) => {
  switch (action.type) {
    case "LEAGUE_CALENDAR/SET_LEAGUE_MATCH_DATA": {
      return {
        ...state,
        matches: action.data
      }
    }
    default:
      return state;
  }
}

export const actions = {
  setLeaguesMatchData: (data: any) => ({type: 'LEAGUE_CALENDAR/SET_LEAGUE_MATCH_DATA', data: data} as const)
}

export const getLeagueMatches = (): thunkType => async (dispatch) => {
  let data = await footballAPI.getLeagueMatches();

  dispatch(actions.setLeaguesMatchData(data));
}

export default leagueCalendarReducer