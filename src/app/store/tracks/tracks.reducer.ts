import {Reducer} from "redux";
import initialState from "./tracks.state";
import {TracksAction, TracksState} from "app/store/tracks/tracks.types";

const reducer: Reducer<TracksState> = (state: TracksState = initialState, action) => {
    switch (action.type) {
        case TracksAction.GET_ALL_TRACKS_SUCCESS:
            return { ...state, tracks: action.payload};
        case TracksAction.ADD_TRACK_TO_PLAYLIST:
            const newPlaylist = [
                ...state.playlist,
                action.payload as number
            ];
            localStorage.setItem('playlist', JSON.stringify(newPlaylist));
            return { ...state, playlist: newPlaylist};
        case TracksAction.REMOVE_TRACK_FROM_PLAYLIST:
            const copyPlaylist = [...state.playlist];
            const trackToRemove = state.playlist.find(item => item === action.payload as number)
            copyPlaylist.splice(copyPlaylist.indexOf(trackToRemove!), 1);
            localStorage.setItem('playlist', JSON.stringify(copyPlaylist));
            return { ...state, playlist:copyPlaylist};
        case TracksAction.SET_PLAYLIST_FILTER:
            const newFilter =  action.payload as string;
            localStorage.setItem('playlistFilter', newFilter);
            return { ...state, playlistFilter: newFilter};
        case TracksAction.GET_PLAYLIST:
            const playlist = localStorage.getItem('playlist');
            const playlistFilter = localStorage.getItem('playlistFilter');
            if(playlist != "null" && playlist != null) {
                return { ...state, playlist: JSON.parse(playlist!), playlistFilter};
            }
            return {...state};
        default:
            return state
    }
};

export { reducer as tracksReducer }