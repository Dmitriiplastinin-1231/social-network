import s from './../Users.module.css';
import userPhoto from './../../../../assets/images/avatar.jpeg';
import { NavLink } from 'react-router-dom';
import { baseURL } from '../../../../api/api';

let User = (props) => {
    let follow = () => {
        props.toggleFollow(props.user, true)
    }
    let unfollow = () => {
        props.toggleFollow(props.user, false)
    }
    // ${props.user.sex==="w"?s.w:s.m}
    return (
        <article className={`${s.user} ${props.user.sex==='women'?s.w:props.user.sex==='man'?s.m: ''}`}>
            <div className={s.left}>
                <div className={s.left__item}>
                    <NavLink to={'/profile/' + props.user.userId}>
                        <img className={s.avatar} src={props.user.photo? baseURL + props.user.photo : userPhoto} alt="avatar" />
                    </NavLink>
                    {props.user.followed?
                        <button className={`${s.followBtn} ${s.active}`} disabled={props.isFollowingProgress.some(id => id === props.user.id)} onClick={unfollow}>follow</button>:
                        <button className={s.followBtn} disabled={props.isFollowingProgress.some(id => id === props.user.id)} onClick={follow}>unfollow</button>
                    }
                </div>
                <div className={`${s.left__item} ${s.left__item__descr}`}>

                        <div className={s.name}>
                            <NavLink className={s.name__link} to={'/profile/' + props.user.userId}>
                                {props.user.name}
                            </NavLink>
                        </div>
                    <div className={s.status}>{props.user.status}</div>
                </div>
            </div>
            <div className={s.right}>
                {props.user.vk && <a href={props.user.vk}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512" fill='#005eff'>

                        <path d="M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z" />
                    </svg>
                </a>}
                {props.user.github && <a href={props.user.github}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 496 512" fill='#234b90'>
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                </a>}
                {/* <div>country: {props.user.location.country}</div> */}
            </div>
        </article>
    )
}

export default User;