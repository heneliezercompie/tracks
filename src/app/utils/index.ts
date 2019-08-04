import TrackVM from "app/models/vms/tracks.vm";

export const filterTrackVms = (tracks: Array<TrackVM>, filter: string| null ) : Array<TrackVM> => {
    if(!tracks) {
        return [];
    }
    let filteredTracks = tracks;
    switch(filter) {
        case "artist":
            filteredTracks = filteredTracks.sort((a,b) => {
                if(a.artist_name < b.artist_name) { return -1; }
                if(a.artist_name > b.artist_name) { return 1; }
                return 0;
            });
            break;
        case "album":
            filteredTracks = filteredTracks.sort((a,b) => {
                if(a.album_name < b.album_name) { return -1; }
                if(a.album_name > b.album_name) { return 1; }
                return 0;
            });
            break;
        case "trackName":
            filteredTracks = filteredTracks.sort((a,b) => {
                if(a.track_name < b.track_name) { return -1; }
                if(a.track_name > b.track_name) { return 1; }
                return 0;
            });
            break;
        default:
            return tracks;
    }
    return filteredTracks;
}
