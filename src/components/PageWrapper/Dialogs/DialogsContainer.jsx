import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { addMessage } from '../../../redux-toolkit/slices/dialogSlice';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth,
        MyId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthRedirect
)(Dialogs)

// export default DialogsConsumer;