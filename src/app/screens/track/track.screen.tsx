import * as React from "react";
//@ts-ignore
import classes from './track.module.scss';
import {ApplicationState} from "app/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getTrack} from "app/store/tracks/tracks.public-selectors";
import TrackVM from "app/models/vms/tracks.vm";
import Field from "app/components/field/field.component";

interface PropsFromDispatch {
    track: TrackVM | null;
    loading: boolean;
}

interface Props {

}

type AllProps = Props & PropsFromDispatch & RouteComponentProps;
class TrackScreen extends React.Component<AllProps> {
    onBack = () => {
        this.props.history.goBack();
    }
    render() {
        if(!this.props.track) {
            return null
        }
        console.log(this.props.loading)
        return (
            <div className={classes.mainGrid}>
                <div className={classes.backButton} onClick={this.onBack}>
                    Back
                </div>


                <div className={classes.coverGrid}>
                    <img className={classes.albumCover} src="https://pm1.narvii.com/6479/42fc073a7ebb4569545313fe1ce3c0b02578af1b_hq.jpg"/>
                </div>

                <div className={classes.bodyGrid}>
                    <div className={classes.title}>
                        {this.props.track.track_name}
                    </div>

                    <div className={classes.fieldWrapper}>
                        <Field title={"Album name"} description={this.props.track.album_name}/>

                    </div>
                    <div className={classes.fieldWrapper}>
                        <Field title={"Artist name"} description={this.props.track.artist_name}/>

                    </div>
                    <div className={classes.fieldWrapper}>
                        <Field title={"Track rating"} description={this.props.track.track_rating.toString()}/>

                    </div>

                    <a className={classes.share} href={this.props.track.track_share_url}>
                        View Lyrics
                    </a>
                </div>


            </div>
        );

    }
}

const mapStateToProps = (state: ApplicationState, props: AllProps) => {
    // @ts-ignore
    const trackId = parseInt(props.match.params['track_id']);

    return {
        track: getTrack(state,trackId),
    }

};
const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(TrackScreen));