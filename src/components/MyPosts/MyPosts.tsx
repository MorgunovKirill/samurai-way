import React, {ChangeEvent, FC, useRef} from "react";
import {Post} from "../Post/Post";
import styles from "./MyPosts.module.css";
import {ProfilePageType} from "../../types";
import {addPostActionCreator, updateNewPostActionCreator} from "../../redux/store";

type PostsPropsType = {
    profilePage: ProfilePageType
    dispatch: (action: any) => void
}

export const MyPosts: FC<PostsPropsType> = ({profilePage, dispatch}) => {
    const addPostHandler = () => {
        dispatch(addPostActionCreator())
    }

    const onPostChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewPostActionCreator(evt.currentTarget.value))
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