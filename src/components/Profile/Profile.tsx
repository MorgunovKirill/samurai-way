import React, {FC} from "react";
import {Posts} from "../Posts/Posts";
import {ProfileInfo} from "../ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    posts: PostType[]
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
