import {StoreType} from "../types";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_POST_ACTION = 'ADD-POST';
const UPDATE_NEW_POST_ACTION = 'UPDATE-NEW-POST';
const ADD_NEW_MESSAGE_ACTION = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_ACTION = 'UPDATE-NEW-MESSAGE';

export const addPostActionCreator = () => {
    return {type: ADD_POST_ACTION} as const
}

export const updateNewPostActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_POST_ACTION, newText} as const
}

export const addMessageActionCreator = () => {
    return {type: ADD_NEW_MESSAGE_ACTION} as const
}

export const updateNewMessageActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_MESSAGE_ACTION, newText} as const
}

type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostActionCreatorType = ReturnType<typeof updateNewPostActionCreator>
type AddMessageActionCreatorType = ReturnType<typeof addMessageActionCreator>
type UpdateNewMessageActionCreatorType = ReturnType<typeof updateNewMessageActionCreator>

export type UnionActionType =  AddPostActionCreatorType | UpdateNewPostActionCreatorType | AddMessageActionCreatorType | UpdateNewMessageActionCreatorType;

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', text: 'Hello world!', likesCount: 3},
                {id: '2', text: 'It\'s my first message!', likesCount: 15},
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: '1', name: 'Ivan'},
                {id: '3', name: 'Katya'},
                {id: '5', name: 'Emery'},
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action: UnionActionType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}
