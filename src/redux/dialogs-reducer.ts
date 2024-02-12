import {UnionActionType} from "./store";
import {DialogPageType} from "../types";

const ADD_NEW_MESSAGE_ACTION = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_ACTION = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state: DialogPageType, action: UnionActionType) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_ACTION:
            const newMessage = {
                id: '6',
                text: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE_ACTION:
            state.newMessageText = action.newText
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;
