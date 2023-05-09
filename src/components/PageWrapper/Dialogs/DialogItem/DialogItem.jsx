import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function DialogItem({ name, id }){
    return(
        <div className={s.dialog + ' '}>
            <NavLink to={'/messages/' + id}>{name}</NavLink>
        </div>
    );
}


export default DialogItem;