import s from './News.module.css';
import UserBlock from './../../common/UserBlock/UserBlock';


const News = ({news}) => {
    return (
        <div className={s.news__inner}>
            {
                news.map(post => {
                return (
                    <article className='post__item' key={post.id}>
                        <UserBlock avatar={post.author.photo} name={post.author.name} status={post.author.status} id={post.author.userId} />
                        <div className={s.title}>{post.title}</div>
                        <div className={s.text}>{post.text}</div>
                    </article>
                )
            })
        }
        </div>

    )
}

export default News;