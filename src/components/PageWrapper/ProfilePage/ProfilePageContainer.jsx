import React from 'react';
import { connect } from 'react-redux';
import { displayUserProfile, getStatus,updateStatus, savePhoto } from '../../../redux/profile-reducer';
import ProfilePage from './ProfilePage';
import { withNavigate } from '../../../hoc/withNavigateFunction';
import { withParams } from '../../../hoc/withParams';
import { compose } from 'redux';
import { profileSelectors, authSelectors } from '../../../redux/selectors';

 


class ProfilePageContainer extends React.Component{
    
    refreshProfile(){
        if (!this.props.param.userId ){
            if (!this.props.authorizedId && !this.props.isAuth){
                this.props.redirect.navigate('/login');
                return;
            }
            this.props.param.userId = this.props.authorizedId;
            this.isMyOwn = true;
        }
        
        this.props.displayUserProfile(this.props.param.userId)
        this.props.getStatus(this.props.param.userId)
    }

    componentDidMount(){
        this.refreshProfile()
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.param.userId != prevProps.param.userId){
            this.refreshProfile()
        }
    }

    render(){
        
        return <ProfilePage {...this.props} 
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus} 
            savePhoto={this.props.savePhoto}
            isMyOwn={this.isMyOwn} 
        />
    }
}
// import { withHistory } from '../../../hoc/withHistory';

let mapStateToProps = (state) => ({
    profile: profileSelectors.getProfile(state),
    status: profileSelectors.getStatus(state),
    authorizedId: authSelectors.getAuthorizedId(state),
    isAuth: authSelectors.getIsAuth(state)
})

export default compose(
    connect(mapStateToProps, {displayUserProfile, updateStatus, getStatus, savePhoto}),
    withParams,
    withNavigate
    // withAuthRedirect
)(ProfilePageContainer)
