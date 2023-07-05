import React from 'react';
import { connect } from 'react-redux';
import { displayUserProfile, updateStatus, savePhoto, updateProfileData } from '../../../redux-toolkit/slices/profileSlice';
import ProfilePage from './ProfilePage';
import { withNavigate } from '../../../hoc/withNavigateFunction';
import { withParams } from '../../../hoc/withParams';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { profileSelectors, authSelectors } from '../../../redux-toolkit/selectors';




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
        if (this.props.param.userId === this.props.authorizedId) {
            this.isMyOwn = true;
        }

        this.props.displayUserProfile(this.props.param.userId)
    }

    componentDidMount(){
        this.refreshProfile();
        document.title = 'Профиль';
    }

    componentDidUpdate(prevProps) {
        if (this.props.param.userId != prevProps.param.userId){
            this.refreshProfile()
        }
    }

    render(){

        return <ProfilePage {...this.props}
            profile={this.props.profile}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
            isMyOwn={this.isMyOwn}
            updateProfileData={this.props.updateProfileData}
        />
    }
}
// import { withHistory } from '../../../hoc/withHistory';

let mapStateToProps = (state) => ({
    profile: profileSelectors.getProfile(state),
    authorizedId: authSelectors.getAuthorizedId(state),
    isAuth: authSelectors.getIsAuth(state)
})

export default compose(
    connect(mapStateToProps, {displayUserProfile, updateStatus, savePhoto, updateProfileData}),
    withParams,
    withNavigate,
    withAuthRedirect
)(ProfilePageContainer)
