import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
//@ts-ignore
import classes from './index.module.scss';

import {ApplicationState} from "app/store";
import {Dispatch} from "redux";
import {getAllTracksRequest} from "app/store/tracks";
import {connect} from "react-redux";
import RegisterScreen from './screens/register/register.screen';
import LoginScreen from './screens/login/login.screen';
import { REGISTER_ROUTE, LOGIN_ROUTE } from './constants/local-related';
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
                <div className={classes.body}>
                    <Switch>
                        <Route exact path={`/${REGISTER_ROUTE}`} component={RegisterScreen} />
                        <Route exact path={LOGIN_ROUTE} component={LoginScreen} />
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
