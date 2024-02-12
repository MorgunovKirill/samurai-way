import React, {FC} from "react";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfilePageType} from "../../types";
import {UnionActionType} from "../../redux/store";

type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: UnionActionType) => void
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
