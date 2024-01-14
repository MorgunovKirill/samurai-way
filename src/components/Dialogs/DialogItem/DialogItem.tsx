import React, {FC} from "react";
import styles from "../Dialog.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    id: string
    name: string
}

const DialogItem: FC<DialogItemPropsType> = ({id, name}) => {
    return  <div className={styles.dialog + ' ' + styles.active}>
        <NavLink to={`/dialogs/${id}`} activeClassName={styles.active}>{name}</NavLink>
    </div>
}

export default DialogItem
