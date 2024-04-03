import {AddMessageActionCreatorType, UpdateNewMessageActionCreatorType} from "../redux/dialogs-reducer";
import {
    AddPostActionCreatorType,
    SetUserProfileActionCreatorType,
    UpdateNewPostActionCreatorType
} from "../redux/profile-reducer";
import {
    FollowActionType,
    setCurrentPageActionType,
    setTotalUsersCountActionType,
    SetUsersActionType, toggleIsFetchingActionType
} from "../redux/users-reducer";

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
    newPostText: string,
    profile: ProfileType | null
}

export type ProfileType = {
    aboutMe: string,
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType
}

export type DialogPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    newMessageText: string
}

type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

type PhotosType = {
    small: null | string,
    large: null | string,
}

export type UserType = {
    id: number,
    followed: boolean,
    name: string,
    photoUrl: string,
    status: string,
    photos: PhotosType,
}

export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type AuthUserType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
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


export type UnionActionType =
    AddMessageActionCreatorType
    | UpdateNewMessageActionCreatorType
    | AddPostActionCreatorType
    | UpdateNewPostActionCreatorType
    | FollowActionType
    | SetUsersActionType
    | setTotalUsersCountActionType
    | setCurrentPageActionType
    | toggleIsFetchingActionType
    | SetUserProfileActionCreatorType;
