import { addPost, updateTextareaPost } from '../../../../redux/profile-reducer';
import MyPost from './MyPosts';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
  return{
    textareaText: state.profilePage.textareaText,
    posts: state.profilePage.posts
    
  }
}

let storeConnect = connect(mapStateToProps, { addPost, onPostChange: updateTextareaPost })(MyPost)



export default storeConnect;