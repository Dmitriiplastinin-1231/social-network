import User from './User/User';
import s from './Users.module.css';
import Loader from '../../common/loader/loader';


let Users = (props) => {
    
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for (let i=2; i <= pagesCount; i++){
        pages.push(i)
    }

    let currentPage = props.currentPage
    let lessChanger = currentPage - 4 < 1 ? 0:currentPage - 4;
    let largeChanger = props.currentPage + 2
    let pagesChanger = pages.slice(lessChanger, largeChanger)

    
    return(
        <section className={s.users}>
            <div className={s.pagination}>
                <ul className={s.pagination__list}>
                <li className={`${s.pagination__list__item} ${props.currentPage === 1 && s.active}`} onClick={() => props.onPageChanged(1)}>1</li>
                    {pagesChanger.map((p, index)=>{
                        return (
                            <>
                               {p !== 2 && index === 0?<li className={`${s.pagination__list__item} ${s.ellipsis}`}>...</li>:<></>}
                               <li className={`${s.pagination__list__item} ${props.currentPage === p && s.active}`} onClick={() => props.onPageChanged(p)}>{p}</li>
                            </>
                        )
                    })}
                </ul>
            </div>
            {props.isFetching?<Loader />:<div className="users__inner">
                {props.users.map(user => {
                    return <User  
                    user={user}
                    toggleFollow={props.toggleFollow}
                    key={user.id}
                    toggleFollowingProgress={props.toggleFollowingProgress}
                    isFollowingProgress={props.isFollowingProgress}
                />
            })}
            </div>}
            
        </section>
    )
}

export default Users;