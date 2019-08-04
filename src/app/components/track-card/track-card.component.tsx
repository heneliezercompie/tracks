import TrackVM from "app/models/vms/tracks.vm";
import * as React from "react";
//@ts-ignore
import classes from './track-card.module.scss';
interface Props {
    track: TrackVM,
    onStateChanged: () => void;
    isInPlaylist: boolean;
}

interface State {
    isFocused: boolean;
}
class TrackCard extends React.Component<Props,State>  {
    state = {
        isFocused: false,
    };
    onStateChanged = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        this.props.onStateChanged();
    };
    render(){
        return(
            <div className={classes.mainGrid} style={{backgroundImage:`url("https://pm1.narvii.com/6479/42fc073a7ebb4569545313fe1ce3c0b02578af1b_hq.jpg")`}}>
                {
                    this.props.isInPlaylist ?
                        <div onClick={this.onStateChanged} className={classes.add}>
                            Remove from playlist
                        </div>
                         :   <div onClick={this.onStateChanged} className={classes.add}>
                            Add to playlist
                        </div>
                }

                <div className={classes.details}>
                        <div className={classes.trackName}>
                            {this.props.track.track_name}
                        </div>
                        <div className={classes.albumName}>
                            {this.props.track.album_name}
                        </div>
                        <div className={classes.artistName}>
                            {this.props.track.artist_name}
                        </div>

                </div>
            </div>

        )
    }
}

export default TrackCard;