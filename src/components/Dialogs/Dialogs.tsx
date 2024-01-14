import React from "react";
import styles from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";

const Dialogs = () => {
    const dialogsData = [
        {id: '1', name: 'Ivan'},
        {id: '2', name: 'Vasiliy'},
        {id: '3', name: 'Katya'},
        {id: '4', name: 'John'},
        {id: '5', name: 'Emery'},
        {id: '6', name: 'Dmitriy'},
    ]

    const messagesData = [
        {id: '1', text: 'Hi'},
        {id: '2', text: 'How are you?'},
        {id: '3', text: 'Great!'},
        {id: '4', text: 'Yo'},
        {id: '5', text: 'YoYo'},
        {id: '6', text: 'YoYo asdasd'},
    ]

    return (
        <div className={styles.wrapper}>
            <h1>Dialogs</h1>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {
                        dialogsData.map(dialog => {
                            return <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
                        })
                    }
                </div>
                <div className={styles.messages}>
                    {
                        messagesData.map(message => {
                           return <MessageItem key={message.id} text={message.text} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Dialogs
