import { reducer as form } from 'redux-form';
import { configureStore } from "@reduxjs/toolkit";


import newsPage from './slices/newsSlice';
import profilePage from './slices/profileSlice';
import messagesPage from './slices/dialogSlice';
import usersPage from './slices/usersSlice';
import auth from './slices/authSlice';
import app from './slices/appSlice';

const store = configureStore({
    reducer: {
        newsPage,
        profilePage,
        messagesPage,
        usersPage,
        auth,
        app,
        form
    },
});

export default store;