import {baseThunkType, inferActionsTypes } from "./reduxStore";
import {footballAPI} from "../api/api";
import {leagueType} from "../types/types";

type actionsType = inferActionsTypes<typeof actions>
type thunkType = baseThunkType<actionsType>

let initialState = {
  leagues: [] as Array<leagueType> | null
};

const leaguesReducer = (state = initialState, action: actionsType) => {
  switch (action.type) {
    case "LEAGUES/SET_LEAGUES_DATA": {
      return {
        ...state,
        leagues: action.data
      }
    }
    default:
      return state;
  }
}

export const actions = {
  setLeaguesData: (data: any) => ({type: 'LEAGUES/SET_LEAGUES_DATA', data: data} as const)
}

export const getLeagues = (): thunkType => async (dispatch) => {
  let data = await footballAPI.getLeagues();

  dispatch(actions.setLeaguesData(data));
}

export default leaguesReducer