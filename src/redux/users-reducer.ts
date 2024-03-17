import {UnionActionType} from "./store";
import {UsersPageType, UserType} from "../types";

const SET_USERS_ACTION = 'SET-USERS-ACTION'
const FOLLOW_ACTION = 'FOLLOW-ACTION';

const initialState: UsersPageType = {
    users: [],
};

const usersReducer = (state: UsersPageType = initialState, action: UnionActionType): UsersPageType => {
    switch (action.type) {
        case SET_USERS_ACTION:
            return {...state, users: action.users}
        case FOLLOW_ACTION:
            return {
                ...state,
                users: state.users.map((user) => user.id === action.userId ? {
                    ...user,
                    followed: action.followed
                } : user)
            }
        default:
            return state;
    }
}

export type FollowActionType = ReturnType<typeof followAC>
export type SetUsersActionType = ReturnType<typeof setUsersAC>

export const followAC = (userId: number, followed: boolean) => {
    return {
        type: FOLLOW_ACTION,
        userId,
        followed
    } as const
}

export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS_ACTION,
        users,
    } as const
}

export default usersReducer;
