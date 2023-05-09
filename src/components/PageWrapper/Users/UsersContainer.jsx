import { connect } from 'react-redux';
import { setUsers, toggleFollow } from '../../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import { userSelectors } from '../../../redux/selectors';


class UsersAPIComponent extends React.Component {
      
    componentDidMount(){
        this.props.setUsers(this.props.pageSize)   
    }
    
    onPageChanged = (pageNumber) => {
        this.props.setUsers(this.props.pageSize, pageNumber)
    }

    render() {
        return(
            <Users 
                // currentPage={this.props.currentPage}
                // totalUsersCount={this.props.totalUsersCount}
                // pageSize={this.props.pageSize}
                // isFetching={this.props.isFetching}
                // users={this.props.users}
                // toggleFollow={this.props.toggleFollow}
                // isFollowingProgress={this.props.isFollowingProgress}
                {...this.props}
                onPageChanged={this.onPageChanged}
            />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: userSelectors.getUsers(state),
        pageSize: userSelectors.getPageSize(state),
        totalUsersCount: userSelectors.getTotalUsersCount(state),
        currentPage: userSelectors.getCurrentPage(state),
        isFetching: userSelectors.getIsFetching(state),
        isFollowingProgress: userSelectors.getIsFollowingProgress(state)
    }
}


export default connect(mapStateToProps, { setUsers, toggleFollow})(UsersAPIComponent);