import './Profile.css';
import React from 'react';

class StatusProfile extends React.PureComponent{


    state = {
        editMode: false,
        status: this.props.statusText
    }


    onEditMode = () => {
        if (this.props.isMyOwn){
            this.setState({editMode: true})
        }
    }
    offEditMode = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }


    onStatusChange = (e) =>{
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.statusText !== this.props.statusText){
            this.setState({status: this.props.statusText})
        }
    }

    render(){
        return (
            <div className="status">
                {!this.state.editMode
                ?<div className='status__text' onDoubleClick={this.onEditMode}>
                    {this.state.status || "no status"}
                </div>
                :<div className="stutus__edit">
                    <input className='status__edit-input' onChange={this.onStatusChange} value={this.state.status} type="text" onBlur={this.offEditMode} autoFocus={true} />
                </div>
                }
            </div>
        )
    }
}


export default StatusProfile;