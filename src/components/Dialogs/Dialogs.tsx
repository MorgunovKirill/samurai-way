import React, {FC} from "react";
import styles from "./Dialog.module.css"
import DialogItem from "./DialogItem/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogsPropsType} from "./DialogsContainer";
import {useFormik} from "formik";
import TextArea from "../common/TextArea";

type FormikErrorType = {
    newMessageText?: string
}

const Dialogs:FC<DialogsPropsType> = ({dialogsPage, addMessage}) => {
    const formik = useFormik({
        initialValues: {
            newMessageText: '',
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (!values.newMessageText) {
                errors.newMessageText = 'Required'
            }
            return errors
        },
        onSubmit: values => {
            if (values.newMessageText) {
                addMessage(values.newMessageText)
            }
            formik.resetForm()
        }
    })

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
                <form onSubmit={formik.handleSubmit}>
                    <TextArea
                        error={formik.errors.newMessageText}
                        touched={formik.touched.newMessageText}
                        placeholder={'sdsd'}
                        {...formik.getFieldProps('newMessageText')}
                    />
                    <div>
                        <button type='submit'>Add Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Dialogs
