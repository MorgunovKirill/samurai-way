import React from "react";
import {RootStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileDataTC, setUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../types";
import {Preloader} from "../common/Preloader";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void,
    getProfileDataTC: (userId: string) => void,
}

type ProfilePropsType = MapStatePropsType & MapDispatchToPropsType

type WithRouterProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
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
        if (!this.props.isAuth) return <Redirect to={'/login'} />

        return this.props.profile ? <Profile profile={this.props.profile} /> : <Preloader/>
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile, getProfileDataTC})(WithUrlDataContainerComponent);
