import React, {FC} from "react";
import styles from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

const Dialogs:FC<DialogsPropsType> = ({dialogs, messages}) => {
    return (
        <div className={styles.wrapper}>
            <h1>Dialogs</h1>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    {
                        dialogs.map(dialog => {
                            return <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
                        })
                    }
                </div>
                <div className={styles.messages}>
                    {
                        messages.map(message => {
                           return <MessageItem key={message.id} text={message.text} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Dialogs
