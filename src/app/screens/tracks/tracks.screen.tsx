import * as React from "react";
//@ts-ignore
import classes from './tracks.module.scss';
import {getLoadingState} from "app/store/user-interface/user-interface.public-selectors";
import {LoadingKey} from "app/store/user-interface";
import {getTracks} from "app/store/tracks/tracks.public-selectors";
import {ApplicationState} from "app/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {addToPlaylist, getAllTracksRequest, removeTrackFromPlaylist} from "app/store/tracks";
import TrackVM from "app/models/vms/tracks.vm";
import TrackCard from "app/components/track-card/track-card.component";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Loader from "app/components/loader/loader.component";

interface PropsFromDispatch {
    getAllTracks: typeof getAllTracksRequest
    addTrackToPlaylist: typeof addToPlaylist
    removeFromPlaylist: typeof removeTrackFromPlaylist
}

interface PropsFromState {
    loading: boolean;
    tracks: Array<TrackVM>;
}

interface Props {

}

type AllProps = Props & PropsFromDispatch & PropsFromState & RouteComponentProps;
class TracksScreen extends React.Component<AllProps> {
    componentDidMount() {
        this.props.getAllTracks();
    }
    trackStateChanged = (track : TrackVM) => {
        if(track.isInPlaylist) {
            this.props.removeFromPlaylist(track.track_id)
        } else {
            this.props.addTrackToPlaylist(track.track_id)

        }
    }
    onTrackClicked = (trackId: number) => {
            this.props.history.push(`${trackId.toString()}`)
    }
    render() {
        const { tracks } = this.props;

        return (
            <div className={classes.mainGrid}>
                <div className={classes.loaderWrapper}>
                    <Loader loading={this.props.loading}/>
                </div>
                {
                    (tracks).map((track: TrackVM) => (
                        <div key={track.track_id} onClick={() => this.onTrackClicked(track.track_id)} className={classes.trackWrapper}>
                            <TrackCard onStateChanged={() => this.trackStateChanged(track)} isInPlaylist={track.isInPlaylist} track={track}/>
                        </div>
                    ))
                }
            </div>
        );

    }
}

const mapStateToProps = (state: ApplicationState, props: AllProps) => ({
    isLoadingTRacks: getLoadingState(state, LoadingKey.GET_ALL_TRACKS),
    loading: getLoadingState(state, LoadingKey.GET_ALL_TRACKS),
    tracks: getTracks(state)
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getAllTracks: () =>  dispatch(getAllTracksRequest()),
    removeFromPlaylist: (trackId: number) => dispatch(removeTrackFromPlaylist(trackId)),
    addTrackToPlaylist: (trackId: number) =>  dispatch(addToPlaylist(trackId)),
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TracksScreen));