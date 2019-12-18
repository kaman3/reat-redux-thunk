import React, { Component } from 'react';
import { connect } from "react-redux";
import { User } from "../components/User";
import { Page } from "../components/Page";
import { setYear } from "../actions/PageAction";
import { setUser } from "../actions/UserAction";
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="app">
           <header className='header'>
                 <User name = {this.props.name} setUser = {this.props.setUserAction}/>
           </header>
                 <Page photos = {this.props.page.photos} year = {this.props.page.year} setYear = {this.props.setYearAction}/>
      </div>
    );
  }
}

const mapStateProps = store => {
  return{
    name: store.user.user,
    page: store.page
  }
}

const mapDispatchProps = dispatch => {
  return {
    setYearAction:year => dispatch(setYear(year)),
    setUserAction:name => dispatch(setUser(name))
   
  }
}

export default connect(mapStateProps,mapDispatchProps)(App);
