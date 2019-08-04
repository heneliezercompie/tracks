import * as React from "react";
//@ts-ignore
import classes from './playlist.module.scss';
import {getPlaylist, getPlaylistFilter} from "app/store/tracks/tracks.public-selectors";
import {ApplicationState} from "app/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import TrackVM from "app/models/vms/tracks.vm";
import TrackCard from "app/components/track-card/track-card.component";
import {getPlaylistFromStorage, removeTrackFromPlaylist, setPlaylistFilter} from "app/store/tracks";
import Filters from "app/components/filters/filters.component";
import {RouteComponentProps, withRouter} from "react-router";
import {getLoadingState} from "app/store/user-interface/user-interface.public-selectors";
import {LoadingKey} from "app/store/user-interface";
import Loader from "app/components/loader/loader.component";

interface PropsFromDispatch {
    getPlaylist: typeof getPlaylistFromStorage;
    removeFromPlaylist: typeof removeTrackFromPlaylist;
    setPlaylistFilter: typeof setPlaylistFilter;
}

interface PropsFromState {
    loading: boolean;
    playlistFilter: string | null;
    playlist: Array<TrackVM>;
}

interface Props {

}
interface State {
    searchValue: string;
}

type AllProps = Props & PropsFromDispatch & PropsFromState & RouteComponentProps;

class PlaylistScreen extends React.Component<AllProps, State> {
    state = {
        searchValue: '',
    };
    componentDidMount() {
        this.props.getPlaylist();
    }
    onChangeState = (track: TrackVM) => {
        if(track.isInPlaylist) {
            this.props.removeFromPlaylist(track.track_id)
        }
    };
    onFilterClicked = (filterId: string) => {
        this.props.setPlaylistFilter(filterId);
    };
    onTrackClicked = (trackId: number) => {
        this.props.history.push(`${trackId.toString()}`)
    };
    onSearchValueChanged = (newValue: string) => {
        this.setState({searchValue: newValue});
    };
    filterTracks = (tracks: Array<TrackVM>) => {
        return tracks.filter((track) => track.track_name.toLowerCase().includes(this.state.searchValue.toLowerCase()) || track.artist_name.includes((this.state.searchValue.toLowerCase())));
    }
    render() {
        const { playlist } = this.props;
        const filters = [
            {
                name: "None",
                value: null,
            },

            {
                name: "Track name",
                value: 'trackName',
            },
            {
                name: "Artist",
                value: 'artist',
            },
            {
                name: "Album",
                value: 'album',
            },
        ]
        const playlistFiltered =  this.filterTracks(playlist);
        return (
            <div className={classes.mainGrid}>
                <div className={classes.loaderWrapper}>
                    <Loader loading={this.props.loading}/>
                </div>
                <div className={classes.filtersGrid}>
                    <Filters
                        placeholder={"Search artist, track name"}
                        searchValue={this.state.searchValue}
                        onSearchValueChanged={this.onSearchValueChanged}
                        onFilterClicked={this.onFilterClicked}
                        filters={filters}
                        activeFilterId={this.props.playlistFilter}
                    />
                </div>
                <div className={classes.tracksGrid}>
                    {
                        (playlistFiltered).map(track => (
                            <div key={track.track_id} onClick={() => this.onTrackClicked(track.track_id)} className={classes.trackWrapper}>
                                <TrackCard
                                    isInPlaylist={track.isInPlaylist}
                                    onStateChanged={() => this.onChangeState(track)}
                                    track={track}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        );

    }
}

const mapStateToProps = (state: ApplicationState, props: AllProps) => ({
    playlist: getPlaylist(state),
    playlistFilter: getPlaylistFilter(state),
    loading: getLoadingState(state, LoadingKey.GET_ALL_TRACKS),
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getPlaylist: () =>  dispatch(getPlaylistFromStorage()),
    setPlaylistFilter: (filterId: string) => dispatch(setPlaylistFilter(filterId)),
    removeFromPlaylist: (trackId: number) => dispatch(removeTrackFromPlaylist(trackId))

});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PlaylistScreen));