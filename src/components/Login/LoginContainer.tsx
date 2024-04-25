import React from "react";
import {RootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import {compose} from "redux";
import Login, {LoginType} from "./Login";
import {loginTC} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    loginTC: (data: LoginType) => void
}

type LoginPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

class LoginContainer extends React.Component<LoginPropsType> {

    render() {
        return <Login
            isAuth={this.props.isAuth}
            loginTC={this.props.loginTC}
        />
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        loginTC
    }),
)(LoginContainer)
