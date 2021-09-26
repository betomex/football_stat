import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import leaguesReducer from "./leaguesReducer";
import thunkMiddleWare, { ThunkAction } from 'redux-thunk';
import teamsReducer from "./teamsReducer";
import leagueCalendarReducer from "./leagueCalendarReducer";

let rootReducer = combineReducers({
  leaguesPage: leaguesReducer,
  teamsPage: teamsReducer,
  leagueCalendar: leagueCalendarReducer
});

type rootReducerType = typeof rootReducer //global state
export type appStateType = ReturnType<rootReducerType>

export type inferActionsTypes<T> = T extends {[keys: string]: (...args: any[]) => infer U} ? U : never
export type baseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, appStateType, unknown, A>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;