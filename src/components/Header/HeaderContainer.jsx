import { connect } from "react-redux";
import React from "react";
import Header from "./Header";
import { logout } from './../../redux-toolkit/slices/authSlice';




class HeaderContainer extends React.Component{

    render(){
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
} )

export default connect(mapStateToProps, { logout })(HeaderContainer)