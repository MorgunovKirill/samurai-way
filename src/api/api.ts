import axios from "axios";
import {LoginType} from "../components/Login/Login";

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '93af7b1f-1050-41c1-bb70-dac7f1ed5038'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const authApi = {
    getMe() {
        return instance.get(`auth/me`).then((res) => {
            return res.data
        });
    },
    login(data: LoginRequestType) {
        return instance.post(`/auth/login`, data).then((res) => {
            return res.data
        })
    }
}

export const profileAPI = {
    getProfileData(userId: number) {
        return instance.get(`profile/${userId}`).then((res) => {
            return res.data
        })
    },
    getProfileStatus(userId: number) {
        return instance.get(`profile/status/${userId}`).then((res) => {
            return res.data
        })
    },
    updateProfileStatus(status: string) {
        return instance.put(`profile/status`, {status}).then((res) => {
            return res.data
        })
    },
}

export const usersAPI = {
    fetchUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`).then((res) => {
            return res.data
        });
    },
    followUser(userId: number) {
        return instance.post(
            `follow/${userId}`).then((res) => {
            return res.data
        })
    },
    unFollowUser(userId: number) {
        return instance.delete(
            `follow/${userId}`).then((res) => {
            return res.data
        })
    },
}

type LoginRequestType = LoginType & {
    captcha?: boolean
}
