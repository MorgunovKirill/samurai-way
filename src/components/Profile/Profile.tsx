import React, {FC} from "react";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfilePageType} from "../../types";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void
}

const Profile: FC<ProfilePropsType> = ({profilePage, dispatch}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={profilePage} dispatch={dispatch} />
        </div>
    )
}

export default Profile
