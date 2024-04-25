import React, {FC} from "react";
import {Post} from "../Post/Post";
import styles from "./MyPosts.module.css";
import {MyPostsPropsType} from "./MyPostsContainer";
import {useFormik} from "formik";
import TextArea from "../common/TextArea";

type FormikErrorType = {
    newPostText?: string,
}
export const MyPosts: FC<MyPostsPropsType> = ({profilePage, addPost}) => {
    const formik = useFormik({
        initialValues: {
            newPostText: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (!values.newPostText) {
                errors.newPostText = 'Required'
            }
            return errors
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
                    <TextArea
                        error={formik.errors.newPostText}
                        touched={formik.touched.newPostText}
                        {...formik.getFieldProps('newPostText')}
                    />
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
