import React, {FC} from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPosts/MyPostsContainer";
import {ProfileType} from "../../types";

type ProfilePagePropsType = {
    profile: ProfileType
}

const Profile:FC<ProfilePagePropsType> = ({profile}) => {
    return (
        <div>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile
