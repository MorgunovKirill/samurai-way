import {UnionActionType} from "./store";
import {UsersPageType, UserType} from "../types";

const SET_USERS_ACTION = 'SET-USERS-ACTION'
const FOLLOW_ACTION = 'FOLLOW-ACTION';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state: UsersPageType = initialState, action: UnionActionType): UsersPageType => {
    switch (action.type) {
        case SET_USERS_ACTION:
            return {...state, users: action.users}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.newCurrentPage}
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
export type setCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>

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

export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount,
    } as const
}

export const setCurrentPageAC = (newCurrentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        newCurrentPage,
    } as const
}

export default usersReducer;
