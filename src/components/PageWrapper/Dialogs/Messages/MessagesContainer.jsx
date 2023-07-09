import React from "react";
import { connect } from "react-redux";
import { getMessages, editMessageText, deleteMessage } from "../../../../redux-toolkit/slices/dialogSlice";
import { compose } from "redux";
import { withParams } from "../../../../hoc/withParams";
import Messages from "./Messages";
import { dialogSelectors } from "../../../../redux-toolkit/selectors";

class MessagesContainer extends React.Component {

    refreshDialog() {
        this.props.getMessages(this.props.param.userId);
    }

    componentDidMount() {
        this.refreshDialog();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.param !== this.props.param) {
            this.refreshDialog();
        }
    }

    render() {
        return(
            <Messages {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    messages: dialogSelectors.getDialogState(state).messages,
})

export default compose(
    connect(mapStateToProps, { getMessages, editMessageText, deleteMessage }),
    withParams
)(MessagesContainer)