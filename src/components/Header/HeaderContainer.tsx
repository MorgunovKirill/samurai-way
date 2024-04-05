import React from "react";
import {RootStateType} from "../../redux/redux-store";
import Header from "./Header";
import {connect} from "react-redux";
import {authMeTC} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean,
    login: null | string,
}

type MapDispatchToPropsType = {
    authMeTC: () => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

class HeaderContainer extends React.Component<HeaderPropsType> {
    componentDidMount() {
        authMeTC()
    }

    render() {
        return <Header {...this.props} />
    }
}

export default connect(mapStateToProps, {authMeTC})(HeaderContainer);
