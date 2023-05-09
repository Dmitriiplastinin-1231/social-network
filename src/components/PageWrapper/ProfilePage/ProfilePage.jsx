import MyPostContainer from './MyPost/MyPostsContainer';
import Profile from './Profile/Profile';
import './ProfilePage.css';


function ProfilePage({profile, status, updateStatus, savePhoto, isMyOwn=false}) {
	
	return(
		<div>
			<Profile profile={profile} status={status} updateStatus={updateStatus} isMyOwn={isMyOwn} savePhoto={savePhoto}/>
		    <MyPostContainer />
		</div>
		
	)
}

export default ProfilePage;