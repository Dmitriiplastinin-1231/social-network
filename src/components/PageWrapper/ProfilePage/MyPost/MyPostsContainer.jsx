import { addPost, updatePost, deletePost } from '../../../../redux-toolkit/slices/profileSlice';
import MyPost from './MyPosts';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
  return{
    textareaText: state.profilePage.textareaText,
    posts: state.profilePage.profile.posts

  }
}

let storeConnect = connect(mapStateToProps, { addPost, updatePost, deletePost })(MyPost)



export default storeConnect;