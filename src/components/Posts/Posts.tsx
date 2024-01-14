import React, {FC} from "react";
import {Post} from "../Post/Post";
import styles from "./Posts.module.css"
import {PostsDataType} from "../../App";

type PostsPropsType = {
    posts: PostsDataType[]
}

export const Posts:FC<PostsPropsType> = ({posts}) => {
    return (
        <div className={styles.posts}>
            <div>
                my posts
                <div>
                    new Post
                </div>
            </div>
            <div>
                {
                    posts.map(post => {
                        return <Post key={post.id} message={post.text}  likesCount={post.likesCount} />
                    })
                }
            </div>
        </div>
    )
}
