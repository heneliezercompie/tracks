import {TracksAction} from "app/store/tracks/tracks.types";
import { action } from 'typesafe-actions'

export const getAllTracksRequest = () =>
    action(TracksAction.GET_ALL_TRACKS_REQUEST);
export const getAllTracksSuccess = (data: any) =>
    action(TracksAction.GET_ALL_TRACKS_SUCCESS, data);
export const getPlaylistFromStorage = () =>
    action(TracksAction.GET_PLAYLIST);
export const addToPlaylist = (trackId: number) =>
    action(TracksAction.ADD_TRACK_TO_PLAYLIST, trackId);
export const setPlaylistFilter = (filterId: string) =>
    action(TracksAction.SET_PLAYLIST_FILTER, filterId);
export const removeTrackFromPlaylist = (trackId: number) =>
    action(TracksAction.REMOVE_TRACK_FROM_PLAYLIST, trackId);
export const init = (trackId: number) =>
    action(TracksAction.INIT, trackId);