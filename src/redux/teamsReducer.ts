import {baseThunkType, inferActionsTypes} from "./reduxStore";
import {footballAPI} from "../api/api";
import {teamType} from "../types/types";

type actionsType = inferActionsTypes<typeof actions>
type thunkType = baseThunkType<actionsType>

let initialState = {
  teams: [] as Array<teamType> | null
};

const teamsReducer = (state = initialState, action: actionsType) => {
  switch (action.type) {
    case "TEAMS/SET_TEAMS_DATA": {
      return {
        ...state,
        teams: action.data
      }
    }
    default:
      return state;
  }
}

export const actions = {
  setTeamsData: (data: any) => ({type: 'TEAMS/SET_TEAMS_DATA', data: data} as const)
}

export const getTeams = (): thunkType => async (dispatch) => {
  let data = await footballAPI.getTeams()

  dispatch(actions.setTeamsData(data));
}

export default teamsReducer