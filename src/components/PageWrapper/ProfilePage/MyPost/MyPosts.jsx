import Post from './Post/Post';
import './MyPosts.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../../utilities/validation/validation';


function PostForm(props) {
  return (
    <form className='form' onSubmit={props.handleSubmit}> 
      <Field className='form-textarea'
        component='textarea'
        name='postText'
        validate={ required }
        placeholder='Введите содержиние поста.'
      />
      <button className='form-btn'>Add post</button>
    </form>
  )
}


function MyPost(props){
  
  let postElements = props.posts.map(post => <Post message={post.message} key={post.id} />)
  
  const onSubmit = (data) => {
    props.addPost(data.postText)
  }
  
  return(
    <article className='post'>
      <h3 className='post__title'>My posts:</h3>
      <PostReduxForm onSubmit={onSubmit} />
      <div className='post__inner'>
        {postElements}
      </div>
    </article>
  );
}

const PostReduxForm = reduxForm({form: 'post'})(PostForm)


export default MyPost;