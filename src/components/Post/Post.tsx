import styles from "./Post.module.css";
import React, {FC} from "react";

type PostType = {
    message: string
}

export const Post: FC<PostType> = ({message}) => {
    debugger
    return (
        <div className={styles.item}>
            <img src="https://i.pinimg.com/736x/4b/0d/8a/4b0d8a3809bff41e4f010fc5add5effe.jpg" alt="user avatar"/>
            <p>{message}</p>
        </div>
    )
}
