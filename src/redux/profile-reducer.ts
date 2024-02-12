import {UnionActionType} from "./store";
import {ProfilePageType} from "../types";

const ADD_POST_ACTION = 'ADD-POST';
const UPDATE_NEW_POST_ACTION = 'UPDATE-NEW-POST';

const initialState: ProfilePageType =  {
    posts: [
        {id: '1', text: 'Hello world!', likesCount: 3},
        {id: '2', text: 'It\'s my first message!', likesCount: 15},
    ],
        newPostText: ''
};

const profileReducer = (state: ProfilePageType = initialState, action: UnionActionType) => {
    switch (action.type) {
        case ADD_POST_ACTION:
            const newPost = {
                id: '5',
                text: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_ACTION:
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}

export default profileReducer;
