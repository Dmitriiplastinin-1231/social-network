import { addPost } from '../../../../redux-toolkit/slices/profileSlice';
import MyPost from './MyPosts';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
  return{
    textareaText: state.profilePage.textareaText,
    posts: state.profilePage.posts

  }
}

let storeConnect = connect(mapStateToProps, { addPost })(MyPost)



export default storeConnect;