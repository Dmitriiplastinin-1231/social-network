import { userApi, followApi } from "../api/api";


const ADD_USERS = 'my-app/users/ADD_USERS';
const SET_CURRENT_PAGE = 'my-app/users/SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'my-app/users/SET_USERS_COUNT';
const TOGGLE_FETCHING = 'my-app/users/TOGGLE_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'my-app/users/TOGGLE_FOLLOWING_PROGRESS';
const FOLLOW_OR_UNFOLLOW = 'my-app/users/FOLLOW_OR_UNFOLLOW';


let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: null,
    isFetching: false,
    followingInProgress: []
}


let usersReducer = (state = initialState ,action) =>{
    switch (action.type){
        case FOLLOW_OR_UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: action.followStatus}
                    }
                    return {...u}
                })
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.newCurrent}
        case  ADD_USERS:{
            return ({...state, users: action.users})
        }
        case SET_USERS_COUNT:
            return ({...state, totalUsersCount: action.count})
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_PROGRESS:{
            return {...state, followingInProgress: action.isFetching
                        ?[...state.followingInProgress, action.userId]
                        :state.followingInProgress.filter(id => id !== action.userId)

            }
        }
        default:
            return state;
    };


};

export const addUsers = (users) => ({type: ADD_USERS, users});
export const toggleFollowStatus = (userId, followStatus) => ({ type: FOLLOW_OR_UNFOLLOW, userId: userId, followStatus });
export const setCurrentPage = (newCurrent) => ({type: SET_CURRENT_PAGE, newCurrent});
export const setUsersCount = (count) => ({type: SET_USERS_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId})

export const setUsers = (pageSize, pageNumber=1) => async (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsFetching(true));

        let response = await userApi.getUsers(pageNumber, pageSize)
        dispatch(toggleIsFetching(false));
        dispatch(setUsersCount(response.totalCount));
        dispatch(addUsers(response.items));
    }

export const toggleFollow= (user, followStatus) => async (dispatch) => {
        dispatch(toggleFollowingProgress(true, user.id));
        
        let response;
        if (followStatus){
            response = await followApi.follow(user.id)
        }else{
            response = await followApi.unfollow(user.id)
        }

        if (response.resultCode == 0){
            dispatch(toggleFollowStatus(user.id, followStatus));
        }

        dispatch(toggleFollowingProgress(false, user.id));
    }




export default usersReducer;