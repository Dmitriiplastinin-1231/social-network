import './Profile.css';
import React, { useEffect } from 'react';
import { useState } from 'react';

const StatusProfile = (props) => {

    // state = {
    //     editMode: false,
    //     status: this.props.statusText
    // }
    let [editMode, setEditMode] = useState(false);
    let [userStatus, setStatus] = useState(props.statusText);
    

    const onEditMode = () => {
        setEditMode(true);
    } 
    const offEditMode = () => {
        setEditMode(false);
        props.updateStatus(userStatus);
    } 


    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.statusText)
    }, [props.statusText])
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.statusText !== this.props.statusText){
    //         this.setState({status: this.props.statusText})
    //     }
    // }

    return (
        <div className="status">
            {!editMode
            ?<div className='status__text' onDoubleClick={onEditMode}>
                {props.statusText || "no status"}
            </div>
            :<div className="stutus__edit">
                <input className='status__edit-input' onChange={onStatusChange} value={userStatus} type="text" onBlur={offEditMode} autoFocus={true} />
            </div>
            }
        </div>
    )
    
} 


export default StatusProfile;