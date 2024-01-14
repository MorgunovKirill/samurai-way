import React, {FC} from "react";
import {Posts} from "../Posts/Posts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../App";

type ProfilePropsType = {
    posts: PostsDataType[]
}

const Profile: FC<ProfilePropsType> = ({posts}) => {
   return (
       <div>
           <ProfileInfo />
           <Posts posts={posts}/>
       </div>
   )
}

export default Profile
