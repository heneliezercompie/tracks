import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
//@ts-ignore
import classes from './index.module.scss';
import TracksScreen from "app/screens/tracks/tracks.screen";
import TrackScreen from "app/screens/track/track.screen";
import PlaylistScreen from "app/screens/playlist/playlist.screen";
import Navbar from "app/components/navbar/navbar.component";
import {ApplicationState} from "app/store";
import {Dispatch} from "redux";
import {getAllTracksRequest} from "app/store/tracks";
import {connect} from "react-redux";
import {ALL_TRACKS_ROUTE, MY_PLAYLIST_ROUTE} from "app/constants/local-related";
interface PropsFromDispatch {
    getAllTracks: typeof getAllTracksRequest;
}
type AllProps = PropsFromDispatch;
class App extends React.Component<AllProps> {
    componentDidMount() {
        this.props.getAllTracks();
    }
    render() {
        return (
            <div className={classes.mainGrid}>
                <Navbar />
                <div className={classes.body}>
                    <Switch>
                        <Route exact path={`/${ALL_TRACKS_ROUTE}`} component={TracksScreen} />
                        <Route exact path={`/${MY_PLAYLIST_ROUTE}`} component={PlaylistScreen} />
                        <Route path="/:track_id" component={TrackScreen} />
                    </Switch>
                </div>

            </div>
        );
}
}

const mapStateToProps = (state: ApplicationState) => ({

});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getAllTracks: () =>  dispatch(getAllTracksRequest()),
});

export default connect(mapStateToProps,mapDispatchToProps)(hot(module)(App));
