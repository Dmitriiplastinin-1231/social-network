import { createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../api/api";

const initialState = {
    news: []
}

const newsSlice = createSlice({
    name: 'newsPage',
    initialState,
    reducers: {
        setNews: (state, action) => {
            state.news = action.payload.reverse();
        }
    }
});

export const getNews = () => async dispatch => {
    const response = await postApi.getAllPosts();

    if (response.message === 'Getting posts successfully') {

        dispatch(setNews(response.posts));
    } else {
        console.log(response.message, response.error);
    };
}


export var { setNews } = newsSlice.actions;
export default newsSlice.reducer;