export const userSelectors = {
    getUsers: (state) => state.usersPage.users,
    getPageSize: (state) => state.usersPage.pageSize,
    getTotalUsersCount: (state) => state.usersPage.totalUsersCount,
    getCurrentPage: (state) => state.usersPage.currentPage,
    getIsFetching: (state) => state.usersPage.isFetching,
    getIsFollowingProgress: (state) => state.usersPage.followingInProgress
}
export const profileSelectors = {
    getProfile: (state) => state.profilePage.profile,
    getStatus: (state) => state.profilePage.status,

}
export const authSelectors = {
    getAuthorizedId: (state) => state.auth.id,
    getIsAuth: (state) => state.auth.isAuth
}
export const dialogSelectors = {
    getDialogState: (state) => state.messagesPage
}