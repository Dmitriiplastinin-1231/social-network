import { createSlice } from "@reduxjs/toolkit";
import { profileApi } from "../../api/api";

const initialState = {
    posts: [
        { id: 1, message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.' },
        { id: 2, message: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum  печати и вэб-дизайне является стандартной "рыбой" для текстов на латинице с начала XVI века.' },
        { id: 3, message: 'Как довести читателя до этой важной части, ради которой, собственно и затевалась вся история?' }
    ],
    profile: null,
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
            state.profile.status = action.payload;
        },
        savePhotoSuccess: (state, action) => {
            state.profile = { ...state.profile, ...action.payload };
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
    }
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