import s from './../Users.module.css';
import userPhoto from './../../../../assets/images/avatar.jpeg';
import { NavLink } from 'react-router-dom';

let User = (props) => {
    let follow = () => {
        props.toggleFollow(props.user, true)
    }
    let unfollow = () => {
        props.toggleFollow(props.user, false)
    }
    // ${props.user.sex==="w"?s.w:s.m}
    return (
        <article className={`${s.user} `}>
            <div className={s.left}>
                <div className={s.left__item}>
                    <NavLink to={'/profile/' + props.user.id}>
                        <img className={s.avatar} src={props.user.photos.large != null? props.user.photos.large : userPhoto} alt="avatar" />
                    </NavLink>
                    {props.user.followed?
                        <button className={`${s.followBtn} ${s.active}`} disabled={props.isFollowingProgress.some(id => id === props.user.id)} onClick={unfollow}>follow</button>:
                        <button className={s.followBtn} disabled={props.isFollowingProgress.some(id => id === props.user.id)} onClick={follow}>unfollow</button>
                    }
                </div>
                <div className={`${s.left__item} ${s.left__item__descr}`}>
                    
                        <div className={s.name}>
                            <NavLink className={s.name__link} to={'/profile/' + props.user.id}>
                                {props.user.name}
                            </NavLink>
                        </div>
                    <div className={s.status}>{props.user.status}</div>
                </div>
            </div>
            <div className={s.right}>
                {/* <div>city: {props.user.location.city}</div> */}
                {/* <div>country: {props.user.location.country}</div> */}
            </div>
        </article>
    )
}

export default User; 