import {  mergeMap} from "rxjs/internal/operators";
import {ActionsObservable, Epic, ofType} from "redux-observable";
import {concat, from, of} from "rxjs/index";
import {getAllTracksSuccess} from "app/store/tracks/tracks.actions";
import {LoadingKey, setLoadingState} from "app/store/user-interface";
import {getAllTracksNetworkRequest} from "app/network/requests";
import {TracksAction} from "app/store/tracks";
import TracksSRes from "app/models/server-responses/tracks.sres";

export const getTracksRequestEpic: Epic = (action$: ActionsObservable<any>) => action$.pipe(
    ofType(TracksAction.GET_ALL_TRACKS_REQUEST),
    mergeMap((action) =>
        concat(
            of(setLoadingState(LoadingKey.GET_ALL_TRACKS, true)),
            from(getAllTracksNetworkRequest())
                .pipe(
                    mergeMap(
                        (response: TracksSRes) => {
                            return (
                                concat(
                                    of(getAllTracksSuccess(response.track_list))
                                )
                            )

                        }),
                ),
            of(setLoadingState(LoadingKey.GET_ALL_TRACKS, false)),
        )
    ));