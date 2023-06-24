import { createSlice } from "@reduxjs/toolkit";
import { AuthMe } from "./authSlice";

const initialState = {
    initialized: false
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        initializeCompliter: (state) => {
            state.initialized = true;
        }
    }
});

export const initializeApp = () => (dispatch) => {
    let AuthPromise = dispatch(AuthMe());
    Promise.all([AuthPromise])
        .then(() => {
            dispatch(initializeCompliter());

        })
};

export var { initializeCompliter } = appSlice.actions;
export default appSlice.reducer;