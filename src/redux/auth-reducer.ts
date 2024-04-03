import {AuthUserType} from "../types";

const SET_USER_DATA_ACTION = 'SET-USER-DATA-ACTION'

const initialState: AuthUserType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state= initialState, action: UnionActionType): AuthUserType => {
    switch (action.type) {
        case SET_USER_DATA_ACTION:
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

type SetUserDataActionType = ReturnType<typeof setAuthUserData>
type UnionActionType = SetUserDataActionType

export const setAuthUserData = (id: number, email: string, login: string) => {
    return {
        type: SET_USER_DATA_ACTION,
        data: {
            id,
            email,
            login
        }
    } as const
}


export default authReducer;
