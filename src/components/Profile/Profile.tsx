import React, {FC} from "react";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {MyPosts} from "../MyPosts/MyPosts";
import {PostType} from "../../types";

type ProfilePropsType = {
    posts: PostType[]
    addPost: (text: string) => void
}

const Profile: FC<ProfilePropsType> = ({posts, addPost}) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost} />
        </div>
    )
}

export default Profile
