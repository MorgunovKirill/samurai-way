import React, {FC, useRef} from "react";
import styles from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogPageType} from "../../types";

type DialogsPropsType = {
    dialogsPage: DialogPageType
}

const Dialogs:FC<DialogsPropsType> = ({dialogsPage}) => {
    const addMessage = () => {
        const text = inputRef.current?.value
        alert(text)
    }

    const inputRef = useRef<HTMLTextAreaElement>(null);


    return (
        <div className={styles.wrapper}>
            <h1>Dialogs</h1>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {
                        dialogsPage.dialogs.map(dialog => {
                            return <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
                        })
                    }
                </div>
                <div className={styles.messages}>
                    {
                        dialogsPage.messages.map(message => {
                           return <MessageItem key={message.id} text={message.text} />
                        })
                    }
                </div>
                <textarea ref={inputRef}></textarea>
                <div>
                    <button onClick={addMessage}>Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
