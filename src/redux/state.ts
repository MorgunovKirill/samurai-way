import {PostsDataType} from "../App";

export type PostType = {
    id: string
    text: string
    likesCount: number
}

type DialogType = {
    id: string
    name: string
}

type MessageType = {
    id: string
    text: string
}

type ProfilePageType = {
    posts: PostsDataType[]
}

type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

type SideBarType = {

}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SideBarType
}

const state: RootStateType = {
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
    sidebar: {}
}
