import React, {ChangeEvent, FC, useRef} from "react";
import styles from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPropsType} from "./DialogsContainer";
import {Redirect} from "react-router-dom";

const Dialogs:FC<DialogsPropsType> = ({dialogsPage, updateNewMessage, addMessage, isAuth}) => {
    const addMessageHandler = () => {
        if (dialogsPage.newMessageText) {
            addMessage();
        }
    }
    const newMessageChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        updateNewMessage(evt.currentTarget.value)
    }

    if (!isAuth) return  <Redirect to={'/login'} />

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
                <textarea value={dialogsPage.newMessageText} onChange={newMessageChangeHandler}></textarea>
                <div>
                    <button type='button' onClick={addMessageHandler}>Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
