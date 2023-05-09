import usersReducer, { addUsers } from "./users-reducer";


let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: null,
    isFetching: false,
    followingInProgress: []
}


test('users are being added', () => {
    let action = addUsers(['UserOne', 'UserTwo', 'UserTree']);
    let newState = usersReducer(initialState, action);
    
    expect(newState.users.includes('UserOne') 
        || newState.users.includes('UserTwo') 
        || newState.users.includes('UserTree')).toBe(true)
})

