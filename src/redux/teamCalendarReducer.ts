import {baseThunkType, inferActionsTypes } from "./reduxStore";
import {footballAPI} from "../api/api";
import { teamMatchesType } from "../types/types";

type actionsType = inferActionsTypes<typeof actions>
type thunkType = baseThunkType<actionsType>

let initialState = {
  teamMatches: null as Array<teamMatchesType> | null,
  teamID: 86
};

const teamCalendarReducer = (state = initialState, action: actionsType) => {
  switch (action.type) {
    case "TEAMS_CALENDAR/SET_TEAMS_MATCH_DATA": {
      return {
        ...state,
        teamMatches: action.data
      }
    }
    default:
      return state;
  }
}

export const actions = {
  setTeamsMatchData: (data: any) => ({type: 'TEAMS_CALENDAR/SET_TEAMS_MATCH_DATA', data: data} as const)
}

export const getTeamMatches = (teamID: number = initialState.teamID): thunkType => async (dispatch) => {
  let data = await footballAPI.getTeamMatches(teamID);

  dispatch(actions.setTeamsMatchData(data));
}

export default teamCalendarReducer