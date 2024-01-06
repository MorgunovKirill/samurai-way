import React from "react";
import {Post} from "../Post/Post";
import styles from "./Posts.module.css"

export const Posts = () => {
    return (
        <div className={styles.posts}>
            <div>
                my posts
                <div>
                    new Post
                </div>
            </div>
            <div>
                <Post message={'Hello world!'}  likesCount={3} />
                <Post message={'It\'s my first message!'} likesCount={15}/>
            </div>
        </div>
    )
}
