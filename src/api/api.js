import * as axios from 'axios';

export const baseURL = 'http://localhost:8000/';

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
            .then(response => response.data);

    },
    login(email, password, rememberMe=false){
        return instanse.post('profile/login', { email, password })
            .then(response => { debugger; return response.data});
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
    setProfile(userId) {
        return axios.get(baseURL + 'profile/' + userId)
            .then(response => response.data);
    },
    updateStatus(status) {
        return instanse.put('profile/status', { status })
            .then(response => response.data);
    },
    updateProfileData(data) {
        return instanse.put('profile/edit', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data);
    },

    setPhoto(Photo) {
        const photoData = new FormData();
        console.log(photoData)
        photoData.append('profilePhoto', Photo)
        return instanse.put('profile/photo', photoData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => response.data)
    },
    setBg(Photo) {
        const photoData = new FormData();
        console.log(photoData)
        photoData.append('bg', Photo)
        return instanse.put('profile/bgPhoto', photoData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => response.data)
    }
};


export const postApi = {
    // get all posts
    getAllPosts() {
        return axios.get(baseURL + 'post/')
            .then(response => response.data);
    },
    // get posts one user
    getUserPosts(userId) {
        return axios.get(baseURL + 'post/' + userId)
            .then(response => response.data);
    },
    // creates post
    createPost(title, text) {
        return instanse.post('post/create', { title, text })
            .then(response => response.data);
    },
    // edits post
    editPost(data, id) {
        return instanse.put('post/edit', { data, id })
            .then(response => response.data);
    },
    // deletes post
    deletePost(id) {
        return instanse.delete('post/delete', { data: {id} })
            .then(response => response.data);
    }
}

export const messageApi = {
    // get correspondence with one user;
    getCorrespondence(userId) {
        return instanse.get('message/' + userId)
            .then(response => response.data);
    },
    // get interlocutors
    getInterlocutors() {
        return instanse.get('message/interlocutors/')
            .then(response => response.data);
    },
    // sends message
    sendMessage(text, userId) {
        return instanse.post('message/send/' + userId, { text })
            .then(response => response.data);
    },
    // edits message
    editMessage(text, messageId) {
        return instanse.put('message/edit/' + messageId, { text })
            .then(response => response.data);
    },
    // delets message
    deleteMessage(messageId) {
        debugger
        return instanse.delete('message/delete/' + messageId)
            .then(response => response.data);
    }

}