import {AuthUserType} from "../types";
import {Dispatch} from "redux";
import {authApi} from "../api/api";
import {LoginType} from "../components/Login/Login";

const SET_USER_DATA_ACTION = 'SET-USER-DATA-ACTION'

const initialState: AuthUserType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action: UnionActionType): AuthUserType => {
    switch (action.type) {
        case SET_USER_DATA_ACTION:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

type SetUserDataActionType = ReturnType<typeof setAuthUserData>
type UnionActionType = SetUserDataActionType

export const setAuthUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA_ACTION,
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}

export const authMeTC = () => (dispatch: Dispatch) => {
    authApi.getMe().then((data) => {
        if (data.resultCode === 0) {
            const {id, login, email} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const loginTC = (data: LoginType) => (dispatch: any) => {
    authApi.login(data).then((data) => {
        if (data.resultCode === 0) {
            dispatch(authMeTC());
        }
    })
}

export const logoutTC = () => (dispatch: any) => {
    authApi.logout().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

export default authReducer;
