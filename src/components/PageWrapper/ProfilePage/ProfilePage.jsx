import MyPostContainer from './MyPost/MyPostsContainer';
import Profile from './Profile/Profile';
import './ProfilePage.css';


function ProfilePage({profile, updateStatus, savePhoto, isMyOwn=false, updateProfileData}) {

	return(
		<div>
			<Profile profile={profile} updateStatus={updateStatus} isMyOwn={isMyOwn} savePhoto={savePhoto} updateProfileData={updateProfileData} />
		    <MyPostContainer isMyOwn={isMyOwn} />
		</div>

	)
}

export default ProfilePage;