import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

const api = {
    getMe() {
        return instance.get(`auth/me`).then((res) => {
            return res.data
        });
    },
    getProfileData(userId: string) {
        return instance.get(`profile/${userId}`).then((res) => {
            return res.data
        })
    },
    fetchUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`).then((res) => {
            return res.data
        });
    },
    followUser(userId: number) {
        return instance.post(
            `follow/${userId}`,
            {}).then((res) => {
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

export default api
