import React, {FC} from "react";
import {Post} from "../Post/Post";
import styles from "./Posts.module.css"
import {PostType} from "../../redux/state";

type PostsPropsType = {
    posts: PostType[]
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
