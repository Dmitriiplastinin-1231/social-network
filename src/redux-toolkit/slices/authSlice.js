import { createSlice } from "@reduxjs/toolkit";
import { authApi } from '../../api/api';
import { stopSubmit } from 'redux-form';



const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthData: (state, action) => {
            state.id = action.payload.id;
            state.login = action.payload.login;
            state.email = action.payload.email;
            state.isAuth = action.payload.isAuth;
        }
    }
});

export const AuthMe = () => async (dispatch) => {
    try {
        const response = await authApi.authMe();
        const { userId, name, email } = response;
        if (userId && name && email) {
            dispatch(setAuthData({ id: userId, login: name, email, isAuth: true}))
        };
    } catch (err) {
        console.log(err);
    }

};

export const register = (name, email, password, rememberMe) => async (dispatch) => {
    const response = await authApi.register(name, email, password, rememberMe);

    if (!response) {
        dispatch(AuthMe());
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
        const response = await authApi.login(email, password, rememberMe);
        if (!response) {
            debugger
            dispatch(AuthMe());
        } else {
            dispatch(stopSubmit('login', { _error: 'Incorect login or password' }))
        }


};

export const logout = () => (dispatch) => {
    authApi.logout();
    dispatch(setAuthData({ id: null, login: null, email: null, isAuth: false}))
};

export var { setAuthData } = authSlice.actions;
export default authSlice.reducer;
