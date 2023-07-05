import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../../utilities/validation/validation';

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


    let dialogsElements = props.messagesPage.dialogList.map(person => {
        return <DialogItem name={person.name} key={person.id} id={person.id} />
    });

    let messageElements = props.messagesPage.messages.map(message => {
        return <Message message={message.message} key={message.id}/>
    });

    React.useEffect(() => {
        document.title = 'Сообщения';
    },[])

    const onSubmit = (data) => {
        props.addMessage(data.messageText)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__inner}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <DialogReduxForm onSubmit={onSubmit} />
                {messageElements}
            </div>
        </div>
    );
}


const DialogReduxForm = reduxForm({form: 'dialog'})(DialogForm)


export default Dialogs;