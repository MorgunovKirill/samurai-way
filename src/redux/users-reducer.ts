import {UsersPageType, UserType} from "../types";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_USERS_ACTION = 'SET-USERS-ACTION'
const FOLLOW_ACTION = 'FOLLOW-ACTION';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter((id) => {
                        return id !== action.id
                    })
            }
        default:
            return state;
    }
}

export type FollowActionType = ReturnType<typeof follow>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type ToggleFollowingProgressActionType = ReturnType<typeof toggleFollowingProgress>

type UnionActionType =
    FollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | ToggleFollowingProgressActionType

export const follow = (userId: number, followed: boolean) => {
    return {
        type: FOLLOW_ACTION,
        userId,
        followed
    } as const
}

export const setUsers = (users: UserType[]) => {
    return {
        type: SET_USERS_ACTION,
        users,
    } as const
}

export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount,
    } as const
}

export const setCurrentPage = (newCurrentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        newCurrentPage,
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    } as const
}

export const toggleFollowingProgress = (id: number, isFetching: boolean) => {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        id,
        isFetching,
    } as const
}

export const getUsersTC = (currentPage: number, pageSize:number) => (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    usersAPI.fetchUsers(currentPage, pageSize).then((data) => {
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(toggleIsFetching(false));
    })
}

export const followTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(userId, true))
    usersAPI.followUser(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(follow(userId, true))
        }
        dispatch(toggleFollowingProgress(userId, false))
    })
}

export const unFollowTC = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(userId, true))
    usersAPI.unFollowUser(userId).then((data) => {
        if (data.resultCode === 0) {
            dispatch(follow(userId, false))
        }
        dispatch(toggleFollowingProgress(userId, false))
    })
}

export default usersReducer;
