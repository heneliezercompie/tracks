import * as React from "react";
//@ts-ignore
import classes from './register.module.scss';
import {ApplicationState} from "app/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {getTrack} from "app/store/tracks/tracks.public-selectors";
import AuthField from "app/components/auth-field/auth-field.component";
import Card from "app/components/card/card.component";
import PrimaryButton from "app/components/primary-button/primary-button.component";

interface PropsFromDispatch {

}

interface Props {

}
interface State {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

type AllProps = Props & PropsFromDispatch & RouteComponentProps;
class RegisterScreen extends React.Component<AllProps, State> {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }
    onRegister = () => {

    }
    onBack = () => {
        this.props.history.goBack();
    }
    onEmailChanged = (email: string) => {
        this.setState({email});
    }
    onPasswordChanged = (password: string) => {
        this.setState({password});
    }
    onFirstNameChanged = (firstName: string) => {
        this.setState({firstName});
    }
    onLastNameChanged = (lastName: string) => {
        this.setState({lastName});
    }
    render() {
        const { email, password, firstName, lastName } = this.state;

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
                    <div className={classes.doubleAuthFieldWrapper}>
                        <div className={classes.authFieldWrapper}>
                            <AuthField 
                                label={"First Name"}
                                textfieldProps={{
                                        value: firstName,
                                        onChange: this.onFirstNameChanged,
                                        placeholder: "First Name"
                                    }}
                            />
                        </div>
                        <div className={classes.authFieldWrapper}>
                            <AuthField 
                                    label={"Last Name"}
                                    textfieldProps={{
                                            value: lastName,
                                            onChange: this.onLastNameChanged,
                                            placeholder: "Last Name"
                                        }}
                                />
                        </div>
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
                            text={"Get started"}
                        />
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(RegisterScreen));