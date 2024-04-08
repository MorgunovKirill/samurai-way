import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {RootStateType} from "../../redux/redux-store";
import {DialogPageType} from "../../types";
import {addMessage, updateNewMessage} from "../../redux/dialogs-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

type MapStatePropsType = {
    dialogsPage: DialogPageType
}

type MapDispatchToPropsType = {
    updateNewMessage: (text: string) => void,
    addMessage: () => void,
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        updateNewMessage,
        addMessage
    }),
    withAuthRedirect,
)(Dialogs)
