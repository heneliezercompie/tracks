// define initial state
import {TracksState} from "app/store/tracks/tracks.types";

const initialState: TracksState = {
    tracks: [],
    playlist: [],
    playlistFilter: null
};

export default initialState;