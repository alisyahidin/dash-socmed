import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './style.css'

import Home from '../../containers/Home/'
import Profile from '../../containers/Profile/'
import Users from '../../containers/Users/'

import NavigationBar from '../NavigationBar/'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <NavigationBar />
          <div className="main-content">
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/users" component={Users} />
          </div>
        </>
      </Router>
    )
  }
}

export default App
