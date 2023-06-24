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
    const response = await authApi.authMe();
    if (response.resultCode == 0) {
        let { id, login, email } = response.data;
        dispatch(setAuthData({ id, login, email, isAuth: true}))
    };
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe);
    if (response.resultCode === 0) {
        dispatch(AuthMe());
    } else {
        dispatch(stopSubmit('login', { _error: 'Incorect login or password' }))
    }
};

export const logout = () => async (dispatch) => {
    const response = await authApi.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthData({ id: null, login: null, email: null, isAuth: false}))
    };
};

export var { setAuthData } = authSlice.actions;
export default authSlice.reducer;
