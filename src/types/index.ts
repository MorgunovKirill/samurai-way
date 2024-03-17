import {UnionActionType} from "../redux/store";

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
    posts: PostType[],
    newPostText: string
}

export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}

export type LocationType = {
    city: string,
    country: string
}

export type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    photoUrl: string,
    status: string,
    location: LocationType
}

export type UsersPageType = {
    users: UserType[]
}

export type SideBarType = {
    friends: FriendType[]
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: UnionActionType) => void
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogPageType
    sidebar: SideBarType
}
