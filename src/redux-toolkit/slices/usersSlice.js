import { createSlice } from "@reduxjs/toolkit";
import { userApi, followApi } from "../../api/api";


const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: null,
    isFetching: false,
    followingInProgress: []
};

const usersSlice = createSlice({
    name: 'usersPage',
    initialState,
    reducers: {
        addUsers: (state, action) => {
            state.users = action.payload;
        },
        toggleFollowStatus: (state, action) => {
            state.users = state.users.map( u => {
                if(u.id === action.payload.userId){
                    return { ...u, followed: action.payload.followStatus };
                };
                return { ...u };
            })
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setUsersCount: (state, action) => {
            state.totalUsersCount = action.payload;
        },
        toggleIsFetching: (state, action) => {
            state.isFetching = action.payload;
        },
        toggleFollowingProgress: (state, action) => {
            state.followingInProgress = action.payload.isFetching
            ?[...state.followingInProgress, action.payload.userId]
            :state.followingInProgress.filter(id => id !== action.payload.userId)
        }
    }
});

export const setUsers = (pageSize, pageNumber = 1) => async (dispatch) => {
    dispatch(setCurrentPage(pageNumber));
    dispatch(toggleIsFetching(true));

    let response = await userApi.getUsers(pageNumber, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsersCount(response.totalCount));
    dispatch(addUsers(response.items));
};

export const toggleFollow = (user, followStatus) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, user.id));

    let response;
    if (followStatus) {
        response = await followApi.follow(user.id)
    } else {
        response = await followApi.unfollow(user.id)
    }

    if (response.resultCode == 0) {
        dispatch(toggleFollowStatus({userId: user.id, followStatus}));
    }

    dispatch(toggleFollowingProgress({ isFetching: false, userId: user.id }));
};

export var {
    addUsers,
    toggleFollowStatus,
    setCurrentPage,
    setUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
} = usersSlice.actions;
export default usersSlice.reducer;