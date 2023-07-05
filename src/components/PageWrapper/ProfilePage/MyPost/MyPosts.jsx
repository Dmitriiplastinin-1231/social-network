import Post from './Post/Post';
import './MyPosts.css';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../../utilities/validation/validation';


function PostForm(props) {
  return (
    <form className='form' onSubmit={props.handleSubmit}>
      <label className='form-label'>
        <Field className='form-input'
          component='input'
          name='title'
          placeholder='Введите название поста'
        />
        <Field className='form-textarea'
          component='textarea'
          name='text'
          validate={ required }
          placeholder='Введите содержиние поста.'
        />

      </label>
      <button className='form-btn'>Add post</button>
    </form>
  )
}


function MyPost(props) {
  let postElements;
  if (props.posts) {
    postElements = props.posts.map(post => <Post deletePost={props.deletePost} updatePost={props.updatePost} title={post.title} id={post.id} text={post.text} key={post.id} isMyOwn={props.isMyOwn} />)

  }

  const onSubmit = ({text, title}) => {
    props.addPost(title, text)
  }

  return(
    <article className='post'>
      <h3 className='post__title'>My posts:</h3>
      {props.isMyOwn && <PostReduxForm onSubmit={onSubmit} />}
      <div className='post__inner'>
        {postElements}
      </div>

    </article>
  );
}

const PostReduxForm = reduxForm({form: 'post'})(PostForm)


export default MyPost;