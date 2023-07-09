import Message from "./Message/Message";

const Messages = (props) => {

    let messageElements = props.messages.map(message => {
        return <Message deleteMessage={ props.deleteMessage } editMessageText={props.editMessageText} message={message.text} id={message.id} addresseeId={message.addresseeId} sender={message.sender} key={message.id}/>
    });

    return (
        <div className="">
            {messageElements}
        </div>
    )
}

export default Messages;