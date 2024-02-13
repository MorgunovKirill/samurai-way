import React, {ChangeEvent, FC, useRef} from "react";
import {Post} from "../Post/Post";
import styles from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";

export const MyPosts: FC<MyPostsPropsType> = ({profilePage, addPost, updateNewPostText}) => {
    const onPostChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(evt.currentTarget.value)
    }

    const addPostHandler = () => {
        if (profilePage.newPostText) {
            addPost();
        }
    }

    return (
        <div className={styles.posts}>
            <div>
                My posts
                <div>
                    <textarea onChange={onPostChange} value={profilePage.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add Post</button>
                </div>
            </div>
            <div>
                {
                    profilePage.posts.map(post => {
                        return <Post key={post.id} message={post.text} likesCount={post.likesCount}/>
                    })
                }
            </div>
        </div>
    )
}
