import React, {ChangeEvent, FC, useRef} from "react";
import {Post} from "../Post/Post";
import styles from "./MyPosts.module.css";
import {ProfilePageType} from "../../types";

type PostsPropsType = {
    profilePage: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts: FC<PostsPropsType> = ({profilePage, addPost, updateNewPostText}) => {
    const addPostHandler = () => {
        addPost()
    }

    const onPostChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewPostText(evt.currentTarget.value)
    }

    const inputRef = useRef<HTMLTextAreaElement>(null);

    return (
        <div className={styles.posts}>
            <div>
                My posts
                <div>
                    <textarea onChange={onPostChange} ref={inputRef} value={profilePage.newPostText}></textarea>
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
