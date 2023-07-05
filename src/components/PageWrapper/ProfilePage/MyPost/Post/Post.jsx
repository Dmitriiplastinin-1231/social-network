import './Post.css';
import PostEditor from './PostEditor/PostEditor';
import React from 'react';

function Post({ title, text, id, updatePost, deletePost, isMyOwn }) {

  const [editMode, setEditMode] = React.useState(false);
  const [localTitle, setLocalTitle] = React.useState(title);
  const [localText, setLocalText] = React.useState(text);

  const onTitleChanged = (e) => {
    setLocalTitle(e.target.value);
  }
  const onTextChanged = (e) => {
    setLocalText(e.target.value);
  }
  const editData = () => {
    setEditMode(false);
    updatePost({ title: localTitle, text: localText }, id);
  }
  const onDelete = () => {
    deletePost(id)
  }

  return(
    <article className='post__item'>
      {
        editMode ?
          <>
            <textarea className='post__item-title post__item-textarea' type="text" value={localTitle} onChange={(e) => onTitleChanged(e)} />
            <textarea className='post__item-text post__item-textarea' type='text' value={localText} onChange={(e) => onTextChanged(e)} />
          </> :
          <>
            <h4 className='post__item-title'>{title}</h4>
            <p className='post__item-text'>{text}</p>
          </>
      }
      {isMyOwn && <PostEditor onDelete={onDelete} editMode={editMode} setEditMode={setEditMode} editData={editData} />}

    </article>
  );
}
export default Post;
