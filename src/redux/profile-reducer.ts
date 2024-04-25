import {ProfilePageType, ProfileType, UnionActionType} from "../types";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST_ACTION = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

const initialState: ProfilePageType = {
    posts: [
        {id: '1', text: 'Hello world!', likesCount: 3},
        {id: '2', text: 'It\'s my first message!', likesCount: 15},
    ],
    profile: null,
    status: '',
};

const profileReducer = (state: ProfilePageType = initialState, action: UnionActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST_ACTION:
            const newPost = {
                id: '5',
                text: action.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts]};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_USER_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
}

export type AddPostActionCreatorType = ReturnType<typeof addPost>
export type SetUserProfileActionCreatorType = ReturnType<typeof setUserProfile>
export type setStatusActionCreatorType = ReturnType<typeof setStatus>

export const addPost = (newPostText: string) => {
    return {type: ADD_POST_ACTION, newPostText} as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {type: SET_USER_PROFILE, profile} as const
}

export const setStatus = (status: string) => {
    return {type: SET_USER_STATUS, status} as const
}

export const getProfileDataTC = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getProfileData(userId).then((data) => {
        dispatch(setUserProfile(data))
    })
}

export const getUserStatusTC = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getProfileStatus(userId).then((data) => {
        dispatch(setStatus(data))
    })
}

export const updateUserStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateProfileStatus(status).then((data) => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}


export default profileReducer;
