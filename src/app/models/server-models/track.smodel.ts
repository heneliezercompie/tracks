export default interface TrackSModel {
    album_id: number;
    album_name: string;
    artist_id: number;
    artist_name: string;
    commontrack_id: number;
    explicit: number;
    has_lyrics: number;
    has_richsync: number;
    has_subtitles: number;
    instrumental: number;
    num_favourite: number;
    primary_genres: {music_genre_list: []}
    restricted:number;
    track_edit_url: string;
    track_id: number;
    track_name: string;
    track_name_translation_list: []
    track_rating: 1
    track_share_url: string;
    updated_time: string;
}