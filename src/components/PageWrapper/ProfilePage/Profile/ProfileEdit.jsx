import { reduxForm, Field } from 'redux-form';
import { ProfileFormSelect } from '../../../common/FormsControl/FormsControl';
import { profileSexError } from '../../../../utilities/validation/validation';

const ProfileEditForm = (props) => {

    return (
        <form className='profile__edit-form' onSubmit={ props.handleSubmit } >
            <div className="profile__edit-formtitle">
                Изменение профиля:
            </div>
            <label className='profile__edit-label'>
                <Field className='profile__edit-field' type='text' component={'input'} name='name' placeholder='Имя' />
                <Field className='profile__edit-field' type='text' component={'input'} name='age' placeholder='Возраст' />
            </label>
            <label className='profile__edit-label'>
                <Field className='profile__edit-field' type='text' component={'input'} name='status' placeholder='Статус' />
            </label>
            <label className='profile__edit-label'>
                <Field className='profile__edit-field' type='text' component={'input'} name='github' placeholder='Ссылка на github' />
                <Field className='profile__edit-field' type='text' component={'input'} name='vk' placeholder='Ссылка на vk' />
            </label>
            <label className='profile__edit-label profile__edit-selectlabel'>
                <Field className='profile__edit-field' type='text' component={ProfileFormSelect} name='sex' validate={profileSexError} />

            </label>


            {/* <label className="profile__edit-buttonlabel"> */}
                <button className="profile__edit-formbutton" type='submit'>Изменить</button>
            {/* </label> */}
        </form>
    )
}

const ProfileReduxEditForm = reduxForm({form: 'profileEdit'})(ProfileEditForm)


const ProfileEdit = ({ closeEdit, updateProfileData }) => {
    const onSubmit = (data) => {
        if (data.age) {
            data.age = +data.age;
        }

        updateProfileData(data);
    }

    return (
        <div className="profile__edit-window">
            <div className="profile__edit-inner">
                <span className="profile__edit-close" onClick={closeEdit}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" fill="#2055b1"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></span>
                <ProfileReduxEditForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
};

export default ProfileEdit;