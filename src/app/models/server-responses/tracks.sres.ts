import TrackSModel from "app/models/server-models/track.smodel";

export default interface TracksSRes {
    track_list: Array<{track: TrackSModel}>;
}