import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './style.css'

import Login from '../../containers/Login/'
import Home from '../../containers/Home/'
import Profile from '../../containers/Profile/'
import Users from '../../containers/Users/'

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/users" component={Users} />
          <Route path="/login" component={Login} />
        </>
      </Router>
    )
  }
}

export default App
