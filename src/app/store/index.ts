import {combineReducers} from "redux";
import {tracksReducer} from "./tracks/tracks.reducer";
import {uiReducer} from "./user-interface/user-interface.reducer";
import {TracksState} from "app/store/tracks";
import {connectRouter} from "connected-react-router";
import {UserInterfaceState} from "app/store/user-interface";
import {combineEpics} from "redux-observable";
import * as tracksEpics from './tracks/tracks.epics'
import { values } from 'lodash';

export const TRACKS_STORE = 'TRACKS_STORE';
export const UI_STORE = 'UI_STORE';
export const ROUTER_STORE = 'router';


export interface ApplicationState {
    [ROUTER_STORE]: any,
    [TRACKS_STORE]: TracksState,
    [UI_STORE]: UserInterfaceState,
}

export const rootEpic = combineEpics(
    ...values(tracksEpics),
);
export const rootReducer = (history: any) => combineReducers<ApplicationState>({
    [ROUTER_STORE]: connectRouter(history), // history for connected-react-router
    [TRACKS_STORE]: tracksReducer,
    [UI_STORE]: uiReducer,
});
