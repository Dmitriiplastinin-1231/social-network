import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { sendMessage, getInterlocutors } from '../../../redux-toolkit/slices/dialogSlice';
import Dialogs from './Dialogs'
import { connect } from 'react-redux';
import React from 'react';
import { withParams } from '../../../hoc/withParams';
import { dialogSelectors } from '../../../redux-toolkit/selectors';


class DialogsContainer extends React.Component{

    componentDidMount() {
        this.props.getInterlocutors();
    }

    render() {
        return (
            <Dialogs {...this.props} />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        dialogList: dialogSelectors.getDialogState(state).dialogList,
        isAuth: state.auth.isAuth,
        MyId: state.auth.id
    }
}

export default compose(
    connect(mapStateToProps, { sendMessage, getInterlocutors }),
    withAuthRedirect,
    withParams
)(DialogsContainer)

// export default DialogsConsumer;