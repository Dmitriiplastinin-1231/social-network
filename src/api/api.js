import * as axios from 'axios';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instanse = axios.create({withCredentials: true, baseURL})

export const userApi = {
    getUsers(currentPage, pageSize){
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const followApi = {
    follow(id){
        return instanse.post('follow/' + id, {},{withCredentials: true})
            .then(response => response.data)
    },
    unfollow(id){
        return instanse.delete('follow/' + id, {withCredentials: true})
            .then(response => response.data)
    }
}

export const authApi = {
    authMe(){
        return instanse.get('auth/me')
            .then (response => response.data)
    },
    login(email, password, rememberMe=false){
        return instanse.post('auth/login', {email, password, rememberMe})
            .then (response => response.data)
    },
    logout(){
        debugger
        return instanse.delete('auth/login')
            .then (response => response.data)
    }
}

export const profileApi = {
    setProfile(userId){
        return axios.get(baseURL + 'profile/' + userId)
            .then(response => response.data)
    },
    getStatus(userId){
        return instanse.get('profile/status/' + userId)
            .then(response => response.data)
    },
    updateStatus(status){
        return instanse.put('profile/status', {status})
            .then(response => response.data)
    },
    setPhoto(Photo){
        const photoData = new FormData()
        photoData.append('image', Photo)
        return instanse.put('profile/photo', photoData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => response.data)
    }
}