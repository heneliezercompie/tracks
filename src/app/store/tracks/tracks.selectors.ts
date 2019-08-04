import {TracksState} from "app/store/tracks/tracks.types";

export function _getTracks (store: TracksState): any {
    return store.tracks;
}
export function _getPlaylistFilter (store: TracksState): string | null{
    return store.playlistFilter;
}
export function _getPlaylist (store: TracksState): Array<number> {
    return store.playlist;
}
