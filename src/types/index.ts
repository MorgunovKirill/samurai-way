export type PostType = {
    id: string
    text: string
    likesCount: number
}

export type DialogType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    text: string
}

export type FriendType = {
    id: string
    name: string
}

export type ProfilePageType = {
    posts: PostType[]
}

export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type SideBarType = {
    friends: FriendType[]
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SideBarType
}
