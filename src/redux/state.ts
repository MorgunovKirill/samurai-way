import {PostType, RootStateType} from "../types";
import {reRenderEntireTree} from "../render";

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
        ]
    },
    sidebar: {
        friends: [
            {id: '1', name: 'Ivan'},
            {id: '3', name: 'Katya'},
            {id: '5', name: 'Emery'},
        ]
    }
}

export const addPost = (postMessage:  string) => {
    const newPost: PostType = {
        id: '5',
        text: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    reRenderEntireTree(state)
}
