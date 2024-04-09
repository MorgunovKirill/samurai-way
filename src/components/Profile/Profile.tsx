import React, {FC} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import {ProfileType} from "../../types";

type ProfilePagePropsType = {
    profile: ProfileType,
    status: string,
    updateUserStatus:  (status: string) => void,
}

const Profile:FC<ProfilePagePropsType> = ({profile, status, updateUserStatus}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile
