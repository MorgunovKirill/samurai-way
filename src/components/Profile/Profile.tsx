import React, {FC} from "react";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPosts} from "../MyPosts/MyPosts";
import {ProfilePageType} from "../../types";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile: FC<ProfilePropsType> = ({profilePage, addPost, updateNewPostText}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={profilePage} addPost={addPost} updateNewPostText={updateNewPostText} />
        </div>
    )
}

export default Profile
