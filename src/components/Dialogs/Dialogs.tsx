import React, {FC} from "react";
import styles from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string
    name: string
}

type MessageItemPropsType = {
    text: string
}

const DialogItem: FC<DialogItemPropsType> = ({id, name}) => {
    return  <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
}

const MessageItem: FC<MessageItemPropsType> = ({ text}) => {
    return <div className={styles.message}>{text}</div>
}

const Dialogs = () => {
    return (
        <div className={styles.wrapper}>
            <h1>Dialogs</h1>
            <div className={styles.dialogs}>
                <div className={styles.dialogsItems}>
                    <DialogItem name='Ivan' id='1' />
                    <DialogItem name='Vasiliy' id='2' />
                    <DialogItem name='Katya' id='3' />
                    <DialogItem name='John' id='4' />
                    <DialogItem name='Emery' id='5' />
                    <DialogItem name='Dmitriy' id='6' />
                </div>
                <div className={styles.messages}>
                    <MessageItem text='Hi' />
                    <MessageItem text='How are you?' />
                    <MessageItem text='Great!' />
                    <MessageItem text='Yo' />
                </div>
            </div>
        </div>
    )
}

export default Dialogs
