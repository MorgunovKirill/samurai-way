import React, {ChangeEvent, FC, useRef} from "react";
import styles from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogPageType} from "../../types";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/store";

type DialogsPropsType = {
    dialogsPage: DialogPageType
    dispatch: (action: any) => void
}

const Dialogs:FC<DialogsPropsType> = ({dialogsPage, dispatch}) => {
    const newMessageChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(updateNewMessageActionCreator(evt.currentTarget.value))
    }

    const addMessage = () => {
        if(dialogsPage.newMessageText) {
            dispatch(addMessageActionCreator())
        }
    }

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
                    <button type='button' onClick={addMessage}>Add Post</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
