import styles from "./Post.module.css";
import React, {FC} from "react";

type PostType = {
    message: string
    likesCount: number
}

export const Post: FC<PostType> = ({message, likesCount}) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__text}>
                <img src="https://i.pinimg.com/736x/4b/0d/8a/4b0d8a3809bff41e4f010fc5add5effe.jpg" alt="user avatar"/>
                <p>{message}</p>
            </div>
            <div className={styles.item__likes}>
                <p>
                    <span>{likesCount}</span>
                    <span> likes</span>
                </p>
            </div>
        </div>
    )
}
