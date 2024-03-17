import {DialogPageType} from "../types";
import {UnionActionType} from "./store";

const ADD_NEW_MESSAGE_ACTION = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_ACTION = 'UPDATE-NEW-MESSAGE';

export const addMessageActionCreator = () => {
    return {type: ADD_NEW_MESSAGE_ACTION} as const
}

export const updateNewMessageActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_MESSAGE_ACTION, newText} as const
}

export type AddMessageActionCreatorType = ReturnType<typeof addMessageActionCreator>
export type UpdateNewMessageActionCreatorType = ReturnType<typeof updateNewMessageActionCreator>

const initialState: DialogPageType = {
    dialogs: [
        {id: '1', name: 'Ivan'},
        {id: '2', name: 'Vasiliy'},
        {id: '3', name: 'Katya'},
        {id: '4', name: 'John'},
        {id: '5', name: 'Emery'},
        {id: '6', name: 'Dmitriy'},
    ],
    messages: [
        {id: '1', text: 'Hi'},
        {id: '2', text: 'How are you?'},
        {id: '3', text: 'Great!'},
        {id: '4', text: 'Yo'},
        {id: '5', text: 'YoYo'},
        {id: '6', text: 'YoYo asdasd'},
    ],
    newMessageText: ''
};

const dialogsReducer = (state: DialogPageType = initialState, action: UnionActionType): DialogPageType => {
    switch (action.type) {
        case ADD_NEW_MESSAGE_ACTION:
            const newMessage = {
                id: '6',
                text: state.newMessageText,
            }
            return {...state, messages: [...state.messages, newMessage], newMessageText: ''};
        case UPDATE_NEW_MESSAGE_ACTION:
            return {...state, newMessageText: action.newText};
        default:
            return state;
    }
}

export default dialogsReducer;
