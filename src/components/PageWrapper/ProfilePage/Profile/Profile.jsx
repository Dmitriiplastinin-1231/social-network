import React from 'react';
import Loader from '../../../common/loader/loader';
import './Profile.css';
import Status from './ProfileStatus';
import usetPhoto from '../../../../assets/images/avatar.jpeg';
import loader from '../../../../assets/images/loader.svg';
import ProfileEdit from './ProfileEdit';
import { NavLink } from 'react-router-dom';
import { baseURL } from '../../../../api/api';

function Profile(props) {

  const [editMode, setEditMode] = React.useState(false);

  if (!props.profile){
    return(<Loader />)
  }

  const savePhoto = (e) => {
    if (e.target.files.length){
      props.savePhoto(e.target.files[0]);
    }

  }

  const editModeChange = () => {

    setEditMode(f => !f);

    if (!editMode) {
      window.scroll(0, 0);

      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // React.useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => { document.body.style.overflow = '' }
  // }, []);

  return(
		<article className="profile">
      <img className='profile__background' src='https://abrakadabra.fun/uploads/posts/2022-01/1643104370_23-abrakadabra-fun-p-estetika-rossii-oboi-38.jpg' alt='profile background'></img>
      <div className='profile__inner'>
        <div className="profile__img-box">
          <img className='profile__img' src={props.profile.photo? baseURL + props.profile.photo : usetPhoto} alt='profilephoto'></img>
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

          <div className="profile__descr-left">
            <div className='profile__descr-inner'>
              <h2 className='profile__name'>{props.profile.name}
                {
                  props.profile.sex === 'man'
                    ?
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='#7ba9e6'>
                        <path d="M289.8 46.8c3.7-9 12.5-14.8 22.2-14.8H424c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-33.4-33.4L321 204.2c19.5 28.4 31 62.7 31 99.8c0 97.2-78.8 176-176 176S0 401.2 0 304s78.8-176 176-176c37 0 71.4 11.4 99.8 31l52.6-52.6L295 73c-6.9-6.9-8.9-17.2-5.2-26.2zM400 80l0 0h0v0zM176 416a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" />
                      </svg>
                    </span>:
                  props.profile.sex === 'women'
                    ?
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" fill='#e811e1'>
                        <path d="M80 176a112 112 0 1 1 224 0A112 112 0 1 1 80 176zM224 349.1c81.9-15 144-86.8 144-173.1C368 78.8 289.2 0 192 0S16 78.8 16 176c0 86.3 62.1 158.1 144 173.1V384H128c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H224V349.1z" />
                      </svg>
                  </span>:
                  ''
                }
              </h2>
              <Status statusText={props.profile.status} updateStatus={props.updateStatus} isMyOwn={props.isMyOwn} />
              {props.profile.age && <div className="profile__age">age: {props.profile.age}</div>}

            </div>
            {/* <div className='profile__status'>{props.profile.aboutMe}</div> */}
            {/* <div className='profile__tel'>Телефон: +7 937 224 27 13</div> */}
            {/* <div className='profile__city'>Город: Саратов</div> */}
            {/* <div className="social">
              <span>Я в других местах:</span>
              <ul className="social__inner">

              </ul>
            </div> */}
          </div>

          <div className="profile__descr-right">
            {props.isMyOwn &&
              <div className="profile__edit">
                <button className={`profile__right-buttons profile__edit-button ${editMode ? 'active' : ''}`} onClick={editModeChange}><img className='profile__edit-img' src={loader} alt="editMenu" /></button>
                {editMode && <ProfileEdit updateProfileData={props.updateProfileData} closeEdit={editModeChange} />}
              </div>
            }
            <NavLink className='profile__right-buttons' to={'../messages/' + props.profile.userId}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#317fe7'>
                <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
              </svg>
            </NavLink>
          </div>

        </div>
      </div>
    </article>
	);
}

export default Profile;