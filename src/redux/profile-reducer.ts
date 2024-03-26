import {ProfilePageType, ProfileType, UnionActionType} from "../types";

const ADD_POST_ACTION = 'ADD-POST';
const UPDATE_NEW_POST_ACTION = 'UPDATE-NEW-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState: ProfilePageType = {
    posts: [
        {id: '1', text: 'Hello world!', likesCount: 3},
        {id: '2', text: 'It\'s my first message!', likesCount: 15},
    ],
    newPostText: '',
    profile: null,
};

const profileReducer = (state: ProfilePageType = initialState, action: UnionActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST_ACTION:
            const newPost = {
                id: '5',
                text: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''};
        case UPDATE_NEW_POST_ACTION:
            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
}

export type AddPostActionCreatorType = ReturnType<typeof addPost>
export type UpdateNewPostActionCreatorType = ReturnType<typeof updateNewPost>
export type SetUserProfileActionCreatorType = ReturnType<typeof setUserProfile>

export const addPost = () => {
    return {type: ADD_POST_ACTION} as const
}

export const updateNewPost = (newText: string) => {
    return {type: UPDATE_NEW_POST_ACTION, newText} as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}

export default profileReducer;
