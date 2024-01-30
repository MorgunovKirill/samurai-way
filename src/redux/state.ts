import {PostType, RootStateType} from "../types";

let reRenderEntireTree = (state: RootStateType) => {

}

export const state: RootStateType = {
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
        newPostText: 'asds'
    },
    sidebar: {
        friends: [
            {id: '1', name: 'Ivan'},
            {id: '3', name: 'Katya'},
            {id: '5', name: 'Emery'},
        ]
    }
}

export const addPost = () => {
    const newPost: PostType = {
        id: '5',
        text: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    reRenderEntireTree(state)
}

export const updateNewPostText = (newText:  string) => {
    state.profilePage.newPostText = newText
    reRenderEntireTree(state)
}

export const subscribe = (observer: (state: RootStateType) => void) => {
    reRenderEntireTree = observer
}


export const store = {
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
            newPostText: 'asds'
        },
        sidebar: {
            friends: [
                {id: '1', name: 'Ivan'},
                {id: '3', name: 'Katya'},
                {id: '5', name: 'Emery'},
            ]
        }
    },
    _reRenderEntireTree(state: RootStateType) {
        console.log('no subscribers')
    },
    getState() {
        return this._state;
    },
    addPost() {
        const newPost: PostType = {
            id: '5',
            text: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._reRenderEntireTree(this._state)
    },
    updateNewPostText(newText:  string) {
        this._state.profilePage.newPostText = newText
        reRenderEntireTree(this._state)
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._reRenderEntireTree = observer;
    }
}
