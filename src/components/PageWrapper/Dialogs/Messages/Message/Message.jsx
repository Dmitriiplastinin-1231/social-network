import s from './../../Dialogs.module.css';
import UserBlock from './../../../../common/UserBlock/UserBlock';
import React from 'react';




function Message({ message, sender, editMessageText, id, deleteMessage }) {

  const [editMode, setEditMode] = React.useState(false);
  const [localText, setLocalText] = React.useState(message);

  const editData = () => {
    setEditMode(false);
    editMessageText(localText, id);
  }

  const editMessage = (e) => {
    setLocalText(e.target.value);
  }

  return (
      <div className={s.message}>
          <div className={s.message__inner}>
              <UserBlock avatar={sender.photo} name={sender.name} status={sender.status} id={sender.userId}/>
              <div className={s.message__edit}>
                  {
                    editMode ?
                      <button className={s.message__button} onClick={editData} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#567fd2">
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </button> :
                      <button className={s.message__button} onClick={() => setEditMode(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#567fd2">
                          <path d="M373.5 27.1C388.5 9.9 410.2 0 433 0c43.6 0 79 35.4 79 79c0 22.8-9.9 44.6-27.1 59.6L277.7 319l-10.3-10.3-64-64L193 234.3 373.5 27.1zM170.3 256.9l10.4 10.4 64 64 10.4 10.4-19.2 83.4c-3.9 17.1-16.9 30.7-33.8 35.4L24.4 510.3l95.4-95.4c2.6 .7 5.4 1.1 8.3 1.1c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32c0 2.9 .4 5.6 1.1 8.3L1.7 487.6 51.5 310c4.7-16.9 18.3-29.9 35.4-33.8l83.4-19.2z" />
                        </svg>
                      </button>
                  }
                  <button className={s.message__button} onClick={() => deleteMessage(id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#e34a4a">
                          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                      </svg>
                  </button>
              </div>
          </div>
          {
              editMode
              ?<textarea className={`${s.message__text} ${s.message__textarea}`} value={localText} onChange={(e) => editMessage(e)}/>
              :<div className={s.message__text}>{message}</div>
          }
      </div>
  );
}


export default Message;