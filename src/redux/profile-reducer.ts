import {ProfilePageType} from "../types";
import {UnionActionType} from "./store";

const ADD_POST_ACTION = 'ADD-POST';
const UPDATE_NEW_POST_ACTION = 'UPDATE-NEW-POST';

export type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostActionCreatorType = ReturnType<typeof updateNewPostActionCreator>

export const addPostActionCreator = () => {
    return {type: ADD_POST_ACTION} as const
}

export const updateNewPostActionCreator = (newText: string) => {
    return {type: UPDATE_NEW_POST_ACTION, newText} as const
}

const initialState: ProfilePageType =  {
    posts: [
        {id: '1', text: 'Hello world!', likesCount: 3},
        {id: '2', text: 'It\'s my first message!', likesCount: 15},
    ],
        newPostText: ''
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
        default:
            return state;
    }
}

export default profileReducer;
