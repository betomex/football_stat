import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import leaguesReducer from "./leaguesReducer";
import thunkMiddleWare, { ThunkAction } from 'redux-thunk';

let rootReducer = combineReducers({
  leaguesPage: leaguesReducer
});

type rootReducerType = typeof rootReducer //global state
export type appStateType = ReturnType<rootReducerType>

export type inferActionsTypes<T> = T extends {[keys: string]: (...args: any[]) => infer U} ? U : never
export type baseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, appStateType, unknown, A>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

export default store;