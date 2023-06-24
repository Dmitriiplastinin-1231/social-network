import { createSlice } from "@reduxjs/toolkit";
import { profileApi } from "../../api/api";

const initialState = {
    posts: [
        { id: 1, message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' },
        { id: 2, message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum  печати и вэб-дизайне является стандартной "рыбой" для текстов на латинице с начала XVI века.' },
        { id: 3, message: 'Как довести читателя до этой важной части, ради которой, собственно и затевалась вся история?' }
    ],
    profile: null,
    status: ''
};

const profileSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {
        addPost: (state, action) => {
            const newPost = {
                id: 5,
                message: action.payload
            };
            state.posts.unshift(newPost);
        },
        setUserProfile: (state, action) => {
            state.profile = action.payload;
        },
        setUserStatus: (state, action) => {
            state.status = action.payload;
        },
        savePhotoSuccess: (state, action) => {
            state.profile = { ...state.profile, ...action.payload };
        }
    }
});

export const displayUserProfile = (userId) => async dispatch => {
    let response = await profileApi.setProfile(userId);
    dispatch(setUserProfile(response));
};

export const getStatus = (userId) => async dispatch => {
    let response = await profileApi.getStatus(userId)
    dispatch(setUserStatus(response))
};

export const updateStatus = (status) => async dispatch => {
    let response = await profileApi.updateStatus(status)
    response.resultCode === 0 && dispatch(setUserStatus(status))
};

export const savePhoto = photo => async dispatch => {
    let response = await profileApi.setPhoto(photo);
    console.log(response.resultCode)
    response.resultCode === 0 && dispatch(savePhotoSuccess(response.data));
};

export var { addPost,
    setUserProfile,
    setUserStatus,
    savePhotoSuccess
} = profileSlice.actions;
export default profileSlice.reducer;