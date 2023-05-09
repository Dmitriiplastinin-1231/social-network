import Loader from '../../../common/loader/loader';
import './Profile.css';
import Status from './ProfileStatus';
import usetPhoto from '../../../../assets/images/avatar.jpeg'

function Profile(props){
  if (!props.profile){
    return(<Loader />)
  }
  
  const savePhoto = (e) => {
    if (e.target.files.length){
      props.savePhoto(e.target.files[0]);
    }

  }

  return(
		<article className="profile">
      <img className='profile__background' src='https://abrakadabra.fun/uploads/posts/2022-01/1643104370_23-abrakadabra-fun-p-estetika-rossii-oboi-38.jpg' alt='profile background'></img>
      <div className='profile__inner'>
        <div className="profile__img-box">
          <img className='profile__img' src={props.profile.photos.large || usetPhoto} alt='profilephoto'></img>
          {props.isMyOwn && 
            <div className="profile__img-hover">
              <label className="profile__img-label">
                <input className="profile__img-editor" type={"file"} onChange={savePhoto} />
                edit profile photo
              </label>
            </div>
          }
        </div>
        <div className='profile__descr'>
          <h2 className='profile__name'>{props.profile.fullName}</h2>
          <div className='profile__descr-inner'>
            <Status statusText = {props.status} updateStatus={props.updateStatus} isMyOwn={props.isMyOwn}/>
            {/* <div className='profile__status'>{props.profile.aboutMe}</div> */}
            {/* <div className='profile__tel'>Телефон: +7 937 224 27 13</div> */}
           {/* <div className='profile__city'>Город: Саратов</div> */}
          </div>
       </div>
      </div>
    </article>
	);
}

export default Profile;