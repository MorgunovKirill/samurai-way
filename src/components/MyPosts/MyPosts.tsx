import React, {FC, useRef} from "react";
import {Post} from "../Post/Post";
import styles from "./MyPosts.module.css";
import {PostType} from "../../types";

type PostsPropsType = {
    posts: PostType[]
    addPost: (text: string) => void
}

export const MyPosts:FC<PostsPropsType> = ({posts, addPost}) => {
    const addPostHandler = () => {
        const text = inputRef.current?.value
        if (text) {
            addPost(text)
            inputRef.current.value = ''
        }
    }

    const inputRef = useRef<HTMLTextAreaElement>(null);

    return (
        <div className={styles.posts}>
            <div>
                My posts
                <div>
                    <textarea ref={inputRef}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add Post</button>
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
