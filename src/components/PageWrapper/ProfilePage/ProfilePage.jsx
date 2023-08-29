import MyPostContainer from './MyPost/MyPostsContainer';
import Profile from './Profile/Profile';
import './ProfilePage.css';

/**
 * @descr Inner profile section and post section.
 * @param {Object} profile One user profile.
 * @param {Function} updateStatus Updates the status.
 * @param {Function} savePhoto Updates the profile photo.
 * @param {Boolean} isMyOwn Am I the owner of this page?
 * @param {Function} updateProfileData Updates the profileData.
 * @returns jsx
 */
function ProfilePage({profile, updateStatus, savePhoto, isMyOwn=false, updateProfileData}) {

	return(
		<div>
			<Profile profile={profile} updateStatus={updateStatus} isMyOwn={isMyOwn} savePhoto={savePhoto} updateProfileData={updateProfileData} />
		    <MyPostContainer isMyOwn={isMyOwn} />
		</div>

	)
}

export default ProfilePage;