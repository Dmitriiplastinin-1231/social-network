import './Post.css'

function Post({message}){
    return(
      <article className='post__item'>
        <h4 className='post__item-title'>Post Name 1</h4>
        <p className='post__item-text'>{message}</p>
      </article>
    );
}
export default Post;
