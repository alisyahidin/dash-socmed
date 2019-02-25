import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import Login from '../../containers/Login/'
import Home from '../../containers/Home/'
import Profile from '../../containers/Profile/'
import Users from '../../containers/Users/'
import NotFound from '../../containers/NotFound/'

import storage from '../../lib/storage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route path="/users/:id" component={Profile} />
          <Route
            path="/profile"
            render={props => storage.has('user') ? <Profile {...props} /> : <Redirect to="/login" />}
          />
          <Route
            path="/login"
            render={props => !storage.has('user') ? <Login {...props} /> : <Redirect to="/" />}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
