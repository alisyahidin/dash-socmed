import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './style.css'

import Login from '../../containers/Login/'
import Home from '../../containers/Home/'
import Profile from '../../containers/Profile/'
import Users from '../../containers/Users/'
import NotFound from '../../containers/NotFound/'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:id" component={Profile} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
