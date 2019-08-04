import * as React from "react";
import {NavLink} from "react-router-dom";
//@ts-ignore
import classes from './navbar.module.scss';
import {ALL_TRACKS_ROUTE, MY_PLAYLIST_ROUTE} from "app/constants/local-related";

interface Props {

}
class Navbar extends React.Component<Props>  {

    render(){
        return(
            <div className={classes.mainGrid}>
                <div className={classes.navbar}>
                    <NavLink activeClassName={classes.active} className={classes.navlink} to={`/${ALL_TRACKS_ROUTE}`}>
                        <div className={classes.navItem}>
                            All Tracks
                        </div>
                    </NavLink>
                    <NavLink activeClassName={classes.active} className={classes.navlink} to={`/${MY_PLAYLIST_ROUTE}`}>
                        <div className={classes.navItem}>
                            My Playlist
                        </div>
                    </NavLink>
                </div>


            </div>

        )
    }
}

export default Navbar;