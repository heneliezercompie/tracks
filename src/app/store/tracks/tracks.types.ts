import TrackSModel from "app/models/server-models/track.smodel";

export const enum TracksAction {
    GET_ALL_TRACKS_REQUEST = '@@tracks/GET_ALL_TRACKS_REQUEST',
    GET_ALL_TRACKS_SUCCESS = '@@tracks/GET_ALL_TRACKS_SUCCESS',
    GET_PLAYLIST= "@@tracks/GET_PLAYLIST",
    ADD_TRACK_TO_PLAYLIST= '@@tracks/ADD_TRACK_TO_PLAYLIST',
    REMOVE_TRACK_FROM_PLAYLIST = '@@tracks/tREMOVE_TRACK_FROM_PLAYLIST',
    SET_PLAYLIST_FILTER = '@@tracks/SET_PLAYLIST_FILTER',
    INIT = '@tracks/INIT'
}

export interface TracksState {
    tracks: Array<TrackSModel>;
    playlist: Array<number>;
    playlistFilter: string | null;
}