import * as React from "react";
//@ts-ignore
import classes from './login.module.scss';
import {ApplicationState} from "app/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getTrack} from "app/store/tracks/tracks.public-selectors";
import AuthField from "app/components/auth-field/auth-field.component";
import Card from "app/components/card/card.component";
import PrimaryButton from "app/components/primary-button/primary-button.component";
import { Link } from "react-router-dom";
import { REGISTER_ROUTE } from "app/constants/local-related";
interface PropsFromDispatch {

}

interface Props {

}
interface State {
    email: string;
    password: string;
}

type AllProps = Props & PropsFromDispatch & RouteComponentProps;
class LoginScreen extends React.Component<AllProps, State> {
    state = {
        email: "",
        password: "",
    }
    onRegister = () => {

    }
    onEmailChanged = (email: string) => {
        this.setState({email});
    }
    onPasswordChanged = (password: string) => {
        this.setState({password});
    }
    render() {
        const { email, password } = this.state;

        return (
            <div className={classes.mainGrid}>
                <Card className={classes.card}>
                    <div className={classes.authFieldWrapper}>
                        <AuthField 
                            label={"Your email"}
                            textfieldProps={{
                                    value: email,
                                    onChange: this.onEmailChanged,
                                    placeholder: "Email"
                                }}
                        />
                    </div>
                    <div className={classes.authFieldWrapper}>
                        <AuthField 
                            label={"Password"}
                            textfieldProps={{
                                    value: password,
                                    onChange: this.onPasswordChanged,
                                    placeholder: "Password"
                                }}
                        />
                    </div>

                    <div className={classes.buttonWrapper}>
                        <PrimaryButton 
                            onClick={this.onRegister}
                            text={"Login"}
                        />
                     </div>
                     <div className={classes.registerWrapper}>
                        <Link to={REGISTER_ROUTE} className={classes.link}>
                            Register
                        </Link>
                        <span>
                            for a new account
                        </span>
                    </div>
                </Card>
              

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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginScreen));