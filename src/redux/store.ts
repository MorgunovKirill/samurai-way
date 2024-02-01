import {StoreType} from "../types";

const ADD_POST_ACTION = 'ADD-POST';
const UPDATE_NEW_POST_ACTION = 'UPDATE-NEW-POST';

export const addPostActionCreator = () => {
    return {type: ADD_POST_ACTION}
}

export const updateNewPostActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_POST_ACTION, newText}
}

export const store: StoreType = {
    _state: {
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
            ]
        },
        profilePage: {
            posts: [
                {id: '1', text: 'Hello world!', likesCount: 3},
                {id: '2', text: 'It\'s my first message!', likesCount: 15},
            ],
            newPostText: ''
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

    dispatch(action: any) {
        switch (action.type) {
            case ADD_POST_ACTION:
                const newPost = {
                    id: '5',
                    text: this._state.profilePage.newPostText,
                    likesCount: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ''
                this._callSubscriber()
                break;
            case UPDATE_NEW_POST_ACTION:
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber()
                break;
        }
    }
}
