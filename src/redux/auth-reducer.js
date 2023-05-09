import { stopSubmit } from 'redux-form';
import { authApi } from '../api/api';


const SET_AUTH_DATA = 'my-app/auth/SET_AUTH_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) =>{
    switch (action.type){
        case SET_AUTH_DATA: {
            return {...state, ...action.data}
        }
        default:
            return state;
    }
}


export const setAuthData = (id, login, email, isAuth) => ({type: SET_AUTH_DATA, data: {id, login, email, isAuth}});

export const AuthMe = () => {
    return (dispatch) => {
        return authApi.authMe()
            .then(response => {
                if (response.resultCode == 0) {
                    let {id, login, email} = response.data;
                    dispatch(setAuthData(id, login, email, true))
                }
            })
    }
}
export const login = (email, password, rememberMe) => (dispatch) => {
    let response = authApi.login(email, password, rememberMe);
    if (response.resultCode === 0){
        dispatch(AuthMe());
    }else{
        dispatch(stopSubmit('login', {_error: 'Incorect login or password'}))
    }
} 
export const logout = () => (dispatch) =>{
    let response = authApi.logout();
    if (response.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false))
    }
}



export default authReducer;