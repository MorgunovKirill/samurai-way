import React, {FC} from "react";
import styles from "../Dialog.module.css";

type MessageItemPropsType = {
    text: string
}

export const MessageItem: FC<MessageItemPropsType> = ({ text}) => {
    return <div className={styles.message}>{text}</div>
}
