import {RequestType} from "app/network/types";
import networkRequest from "app/network/index";
import {Observable} from "rxjs";
import TracksSRes from "app/models/server-responses/tracks.sres";
import {API_KEY, SEARCH_TRACK_ROUTE, SERVER_URL} from "app/constants/server-related";

export const getAllTracksNetworkRequest = () : Observable<TracksSRes>  => {
    return networkRequest<TracksSRes>({
        url: `${SERVER_URL}/${SEARCH_TRACK_ROUTE}?apikey=${API_KEY}`,
        method: RequestType.GET
    })
}