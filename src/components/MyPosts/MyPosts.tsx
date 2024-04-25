import React, {FC} from "react";
import {Post} from "../Post/Post";
import styles from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";
import {useFormik} from "formik";

export const MyPosts: FC<MyPostsPropsType> = ({profilePage, addPost}) => {
    const formik = useFormik({
        initialValues: {
            newPostText: ''
        },
        onSubmit: values =>  {
            addPost(values.newPostText)
            formik.resetForm()
        }
    })

    return (
        <div className={styles.posts}>
            <form onSubmit={formik.handleSubmit}>
                My posts
                <div>
                    <textarea
                        {...formik.getFieldProps('newPostText')}
                    ></textarea>
                </div>
                <div>
                    <button type='submit'>Add Post</button>
                </div>
            </form>
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
