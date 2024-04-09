import React from "react";
import {RootStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileDataTC} from "../../redux/profile-reducer";
import {ProfileType} from "../../types";
import {Preloader} from "../common/Preloader";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    getProfileDataTC: (userId: string) => void,
}

type ProfilePropsType = MapStatePropsType & MapDispatchToPropsType

type WithRouterProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

class ProfileContainer extends React.Component<WithRouterProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.getProfileDataTC(userId)
    }

    render() {
        return this.props.profile ? <Profile profile={this.props.profile} /> : <Preloader/>
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfileDataTC}),
    withRouter
)(ProfileContainer)
