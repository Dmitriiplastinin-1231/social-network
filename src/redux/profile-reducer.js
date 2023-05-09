import { profileApi } from "../api/api";

const ADD_POST = 'my-app/profile/ADD_POST';
const UPDATE_TEXTAREA_POST = 'my-app/profile/UPDATE_TEXTAREA_POST';
const SET_USER_PROFILE = 'my-app/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'my-app/profile/SET_USER_STATUS';
const SET_PHOTO_SUCCESS = 'my-app/profile/SET_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.'},
        {id: 2, message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum  печати и вэб-дизайне является стандартной "рыбой" для текстов на латинице с начала XVI века.'},
        {id: 3, message: 'Как довести читателя до этой важной части, ради которой, собственно и затевалась вся история?'}
    ],
    profile: null,
    status: ''
}




const profileReducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_POST:{
                let newPost = {
                    id: 5,
                    message: action.postText
                };
                return {
                    ...state,
                    posts: [newPost, ...state.posts]
                };
            }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        case SET_USER_STATUS:{
            return {
                ...state,
                status: action.newStatus
            }
        }
        case SET_PHOTO_SUCCESS:{
            debugger
            return {...state, profile:{...state.profile, ...action.data}}
        }
        default:
            return state;
        
    }
}

export const addPost = (postText) => ({type: ADD_POST, postText});
export const updateTextareaPost = (newText) => ({type: UPDATE_TEXTAREA_POST, newText: newText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (newStatus) => ({type: SET_USER_STATUS, newStatus});
export const savePhotoSuccess = (data) => ({type: SET_PHOTO_SUCCESS, data})

export const displayUserProfile = (userId) => async dispatch => {
    let response = await profileApi.setProfile(userId);
    dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async dispatch => {
    let response = await profileApi.getStatus(userId)
    dispatch(setUserStatus(response))
}
export const updateStatus = (status) => async dispatch => {
    let response = await profileApi.updateStatus(status)
    response.resultCode === 0 && dispatch(setUserStatus(status))
}
export const savePhoto = photo => async dispatch =>{
    let response = await profileApi.setPhoto(photo);
    console.log(response.resultCode)
    response.resultCode === 0 && dispatch(savePhotoSuccess(response.data));
}


export default profileReducer;