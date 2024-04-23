import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {RootStateType} from "../../redux/redux-store";
import {DialogPageType} from "../../types";
import {addMessage} from "../../redux/dialogs-reducer";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import React from "react";

type MapStatePropsType = {
    dialogsPage: DialogPageType
}

type MapDispatchToPropsType = {
    addMessage: (newMessage: string) => void,
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        addMessage
    }),
    withAuthRedirect,
)(Dialogs)
