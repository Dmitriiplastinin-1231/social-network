import * as axios from 'axios';

const baseURL = 'http://localhost:8000/';

const instanse = axios.create({withCredentials: true, baseURL})

export const userApi = {
    // ?page=${currentPage}&count=${pageSize}
    getUsers(currentPage, pageSize){
        return instanse.get(`users/`)
            .then(response => response.data);
    }
}

export const followApi = {
//     follow(id){
//         return instanse.post('follow/' + id, {},{withCredentials: true})
//             .then(response => response.data)
//     },
//     unfollow(id){
//         return instanse.delete('follow/' + id, {withCredentials: true})
//             .then(response => response.data)
//     }
}

export const authApi = {
    authMe() {
        return instanse.get('profile/')
            .then(response => response.data );

    },
    login(email, password, rememberMe=false){
        return instanse.post('profile/login', { email, password })
            .then(response => response.data);
    },
    register(name, email, password) {
        return instanse.post('profile/register', { email, name, password })
            .then(response => response.data);
    },
    logout(){
        document.cookie = 'token=; path=/; expires=-1';
    }
}

export const profileApi = {
    setProfile(userId){
        return axios.get(baseURL + 'profile/' + userId)
            .then(response => response.data);
    },
    updateStatus(status){
        return instanse.put('profile/status', { status })
            .then(response => response.data);
    },
    updateProfileData(data) {
        return instanse.put('profile/edit', data)
            .then(response => response.data);
    }
//     setPhoto(Photo){
//         const photoData = new FormData()
//         photoData.append('image', Photo)
//         return instanse.put('profile/photo', photoData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             })
//             .then(response => response.data)
//     }
}