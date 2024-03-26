import React from "react";
import {RootStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../types";
import {Preloader} from "../common/Preloader";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfilePropsType = MapStatePropsType & MapDispatchToPropsType

type WithRouterProfilePropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

class ProfileContainer extends React.Component<WithRouterProfilePropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((res) => {
            this.props.setUserProfile(res.data)
        })
    }

    render() {
        return this.props.profile ? <Profile profile={this.props.profile} /> : <Preloader/>
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);
