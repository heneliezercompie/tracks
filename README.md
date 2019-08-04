How to run the project -

1. Npm i
2. npm start


Please read before looking into the project


The project is using React + Redux + Rxjs;

I have done some things different then asked.
There are two main pages, All track and my playlist.

-- All tracks page --
In this page you are able to see all of the tracks, even those who aren't in ur playlist.
*  Add track to your playlist by clicking - "Add to playlist"
*  remove tracks by clicked the "Remove from playlist"
*   See more details about a track by clicked on the album cover.

-- My playlist page --

In this page you will see only the tracks that are in ur playlist.
*  filter the tracks with the free search.
*  sort the tracks with the sort ( It will sort the track alphabetically )
*  Refreshing the page will still show you the same sort as you previously selected.
*  remove tracks by clicking the "Remove from playlist" button.

-- Track page

* See more details about the track
* go back to previous page


I have put a lot of time and effort into the projects structure , So please check it out.

* Out of the whole assignment features , I have completed the following
    • Landing page where you can add, delete and sort your playlist.
    • Tracks will be displayed as cards with the following fields:
        ◦ Album cover (if exists).
        ◦ Track name.
        ◦ Album name.
        ◦ Artist name.
    • Track addition is available by track name or by track name & artist name. ( In my solution, u will browse " All tracks" and add to the playlist)
    • Sorting options are by track, album or artist name, addition to the list order (default) and track length.
    • When the user refreshes the page the playlist he created will not change (same songs same order).
    • Clicking on a track card will move the user to the tracks page where the user can see further info about that track like length and lyrics in addition to the info on the card.
    • The track page will have a back button to return to the playlist page.
    • The app should be responsive.
    • Final UI/UX is up to you.

* The album covers never returned an image, So I used a hardcoded image for all of the tracks
* I could'nt find the "track length" value anywhere, and none of the tracks returned from the server had lyrics,
    Therefore the view track page is very slim in data..
