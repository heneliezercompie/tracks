import {ApplicationState, TRACKS_STORE} from "app/store";
import * as TracksSelectors from './tracks.selectors';
import TrackSModel from "app/models/server-models/track.smodel";
import TrackVM from "app/models/vms/tracks.vm";
import {filterTrackVms} from "app/utils";

export function getTracks(store: ApplicationState): Array<TrackVM> {
    const tracks : Array<{track: TrackSModel}> = TracksSelectors._getTracks(store[TRACKS_STORE]);
    //@ts-ignore
    return tracks
        .map(track => getTrack(store, track.track.track_id))
        .filter((track) => track !== null);
}

export function getTrack(store: ApplicationState, id: number):TrackVM | null {
    const tracks : Array<{track: TrackSModel}> = TracksSelectors._getTracks(store[TRACKS_STORE]);
    const playlist : Array<number> = TracksSelectors._getPlaylist(store[TRACKS_STORE]);
    const track : {track: TrackSModel} | undefined = tracks.find((track: {track: TrackSModel}) => id === track.track.track_id);
    return track ? {
        ...track.track,
        isInPlaylist: Boolean(playlist.find((playlistTrackId) => playlistTrackId  === track.track.track_id))
    }: null;
}

export function getPlaylistFilter(store: ApplicationState): string | null {
    return TracksSelectors._getPlaylistFilter(store[TRACKS_STORE])
}


export function getPlaylist(store: ApplicationState): Array<TrackVM> {
    const playlist : Array<number> = TracksSelectors._getPlaylist(store[TRACKS_STORE]);
    const playlistFilter : string | null = TracksSelectors._getPlaylistFilter(store[TRACKS_STORE]);
    let playlistDeletedIdsRemoved = playlist.map((trackId: number) => getTrack(store, trackId))
        .filter((track) => track !== null);
    //@ts-ignore
    return filterTrackVms(playlistDeletedIdsRemoved, playlistFilter);
}

