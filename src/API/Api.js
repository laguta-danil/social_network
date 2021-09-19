import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {"API-KEY": "4be85109-811c-43ef-b3b1-0fa9fda08341"},
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    subscriber(id) {
        return instance.delete(`follow/${id}`, {})
    },
    unsubscribe(id) {
        return instance.post(`follow/${id}`, {}, {})  // может быть ошибка с третим обьектом
    },
    getProfile(userId){
        return instance.get(`profile/` + userId)
    }
}

export const authAPI = {
    me (){
        return instance.get(`/auth/me`)
    }

}