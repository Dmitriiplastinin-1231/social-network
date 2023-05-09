import {useNavigate} from 'react-router-dom';

export const withNavigate = (Component) => {
    return (props) => {
        // const navigateFunction = () => {
            let navigate =  useNavigate()
        // }
        // if (!this.props.param.userId){
        //     this.props.param.userId = this.props.authorizedId;
        //     if (!this.props.authorizedId){
        //         useNavigate('/login')
        //     }
        // }
        
        return <Component {...props} redirect={{navigate}} />
    }
}