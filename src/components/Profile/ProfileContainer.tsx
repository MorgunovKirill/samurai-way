import React from "react";
import {RootStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileDataTC, getUserStatusTC, updateUserStatusTC} from "../../redux/profile-reducer";
import {ProfileType} from "../../types";
import {Preloader} from "../common/Preloader";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null,
    status: string
}

type MapDispatchToPropsType = {
    getProfileDataTC: (userId: number) => void,
    getUserStatusTC: (userId: number) => void,
    updateUserStatusTC: (status: string) => void,
}

type ProfilePropsType = MapStatePropsType & MapDispatchToPropsType

type WithRouterProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

class ProfileContainer extends React.Component<WithRouterProfilePropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfileDataTC(userId)
        this.props.getUserStatusTC(userId)
    }

    render() {
        return this.props.profile ? <Profile profile={this.props.profile} status={this.props.status} updateUserStatus={updateUserStatusTC} /> : <Preloader/>
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileDataTC, getUserStatusTC, updateUserStatusTC}),
    withRouter
)(ProfileContainer)
