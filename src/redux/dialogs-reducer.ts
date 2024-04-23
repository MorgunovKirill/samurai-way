import {DialogPageType, UnionActionType} from "../types";

const ADD_NEW_MESSAGE_ACTION = 'ADD-MESSAGE';

export const addMessage = (newMessage: string) => {
    return {type: ADD_NEW_MESSAGE_ACTION, newMessage} as const
}

export type AddMessageActionCreatorType = ReturnType<typeof addMessage>

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
                text: action.newMessage,
            }
            return {...state, messages: [...state.messages, newMessage]};
        default:
            return state;
    }
}

export default dialogsReducer;
