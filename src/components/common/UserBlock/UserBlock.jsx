import s from './UserBlock.module.css';
import customAvatar from './../../../assets/images/avatar.jpeg';
import { Link } from 'react-router-dom';

const UserBlock = ({avatar, name, status, id}) => {
    const linkToPage = '/profile/' + id;


    return (
        <div className={s.userblock}>
            <Link to={linkToPage}>
                <img className={s.userblock__img} src={avatar || customAvatar} alt="avatar" />
            </Link>
            <div className="userblock__desc">
                <Link to={linkToPage}>
                    <div className={s.userblock__name}>{name}</div>
                </Link>
                <div className={s.userblock__status}>{status}</div>
            </div>
        </div>
    )
};

export default UserBlock;