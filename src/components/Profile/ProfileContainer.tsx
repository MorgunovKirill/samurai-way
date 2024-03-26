import React from "react";
import {RootStateType} from "../../redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfileType} from "../../types";
import {Preloader} from "../common/Preloader";

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

export type ProfilePropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then((res) => {
            this.props.setUserProfile(res.data)
        })
    }

    render() {
        return this.props.profile ? <Profile profile={this.props.profile} /> : <Preloader/>
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);
