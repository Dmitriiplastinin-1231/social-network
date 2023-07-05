import { createSlice } from "@reduxjs/toolkit";
import { postApi, profileApi } from "../../api/api";

const initialState = {
    profile: {},
};

const profileSlice = createSlice({
    name: 'profilePage',
    initialState,
    reducers: {
        setPost: (state, action) => {
            const newPost = {
                id: action.payload.id,
                text: action.payload.text,
                title: action.payload.title
            };
            state.profile.posts.unshift(newPost);
        },
        setUserProfile: (state, action) => {
            action.payload.posts = action.payload.posts.reverse();
            state.profile = action.payload;
        },
        setUserStatus: (state, action) => {
            state.profile.status = action.payload;
        },
        savePhotoSuccess: (state, action) => {
            state.profile = { ...state.profile, ...action.payload };
        },
        setUpdatePost: (state, action) => {
            const post = state.profile.posts.find(post => post.id === action.payload.id);
            post.title = action.payload.title;
            post.text = action.payload.text;
        },
        postDeleted: (state, action) => {
            state.profile.posts = state.profile.posts.filter(post => post.id !== action.payload);
        }
    }
});

export const displayUserProfile = (userId) => async dispatch => {
    let response = await profileApi.setProfile(userId);
    response.photos = {}
    if (!response.message) {
        dispatch(setUserProfile(response));
    } else {
        console.log(response.message);
    }
};

export const updateStatus = (status) => async dispatch => {
    let response = await profileApi.updateStatus(status);
    if (response.message === 'Status Update') {
        dispatch(setUserStatus(response.status));
    } else {
        console.log(response.message);
    };
};

export const updateProfileData = (data) => async dispatch => {
    let response = await profileApi.updateProfileData(data);
    if (response.message === 'Set data successful') {
        dispatch(setUserProfile(response.user));
    } else {
        console.log(response.message)
    };
};

export const savePhoto = photo => async dispatch => {
    let response = await profileApi.setPhoto(photo);
    console.log(response.resultCode)
    response.resultCode === 0 && dispatch(savePhotoSuccess(response.data));
};

export const addPost = (title, text) => async dispatch => {
    let response = await postApi.createPost(title, text);

    if (response.message === 'Post was seccessfully created') {
        const { id, title, text } = response.post;
        dispatch(setPost({ id, title, text }));
    } else {
        console.log(response.message, response.error);
    };
};

export const updatePost = (data, id) => async dispatch => {
    let response = await postApi.editPost(data, id);

    if (response.message === 'Post edited') {
        dispatch(setUpdatePost({ ...data, id }));
    } else {
        console.log(response.message, response.error);
    };
};

export const deletePost = (id) => async dispatch => {
    let response = await postApi.deletePost(id);

    if (response.message === 'Post deleted') {
        dispatch(postDeleted(id));
    } else {
        console.log(response.message, response.error);
    };
};

export var {
    setPost,
    postDeleted,
    setUserProfile,
    setUserStatus,
    savePhotoSuccess,
    setUpdatePost
} = profileSlice.actions;
export default profileSlice.reducer;