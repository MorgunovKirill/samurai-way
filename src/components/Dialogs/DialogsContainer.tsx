import {connect} from "react-redux";
import {
    addMessageActionCreator,
    updateNewMessageActionCreator,
} from "../../redux/store";
import Dialogs from "./Dialogs";
import {RootStateType} from "../../redux/redux-store";
import {DialogPageType} from "../../types";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: DialogPageType
}

type MapDispatchToPropsType = {
    updateNewMessageText: (text: string) => void,
    addMessage: () => void,
}

export type DialogsPropsType = MapStatePropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageText: (text: string) => {
            dispatch(updateNewMessageActionCreator(text))
        },
        addMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
