import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import PageWrapper from './components/PageWrapper/PageWrapper'
import React from 'react';
import { initializeApp } from './redux-toolkit/slices/appSlice';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Loader from './components/common/loader/loader';


class App extends React.Component {
  componentDidMount(){
    this.props.initializeApp()
  }



  render(){
    return this.props.initialized
    ?(
      <div>
        <HeaderContainer />
        <PageWrapper />
      </div>
    )
    :<Loader />
  }
}


const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose( connect( mapStateToProps, { initializeApp}))(App)
