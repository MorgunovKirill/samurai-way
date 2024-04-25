import React, {FC} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import {ProfileType} from "../../types";
import {Redirect} from "react-router-dom";

type ProfilePagePropsType = {
    isAuth: boolean,
    profile: ProfileType,
    status: string,
    updateUserStatus: (status: string) => void,
}

const Profile:FC<ProfilePagePropsType> = ({isAuth, profile, status, updateUserStatus}) => {

    if(!isAuth) return <Redirect to={'/login'} />

    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile
