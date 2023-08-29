import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utilities/validation/validation';
import MessagesContainer from './Messages/MessagesContainer';


const DialogForm = (props) => {
    return (
        <form className={`form ${s.form}`} onSubmit={props.handleSubmit}>
            <Field
                className='form-textarea'
                name='messageText'
                component='textarea'
                placeholder='Введите сообщение'
                validate={required}
            />
            <button className='form-btn' type='submit'>Отправить</button>
        </form>
    )
}


function Dialogs(props){


    var dialogsElements = props.dialogList.map(person => {
        return <DialogItem name={person.name} id={person.userId} key={person.userId}/>
    });


    // let messageElements = props.messagesPage.messages.map(message => {
        // return <Message message={message.text} id={message.id} addresseeId={message.addresseeId} sender={message.sender} key={message.id}/>
    // });

    React.useEffect(() => {
        document.title = 'Сообщения';
    },[])

    const onSubmit = (data) => {
        props.sendMessage(data.messageText, props.param.userId);

    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__inner}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {/* {messageElements} */}
                <MessagesContainer />
                <DialogReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    );
}


var DialogReduxForm = reduxForm({form: 'dialog'})(DialogForm)


export default Dialogs;