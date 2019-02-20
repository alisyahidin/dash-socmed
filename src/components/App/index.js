import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
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
          <Container className="main-content">
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/users" component={Users} />
          </Container>
        </>
      </Router>
    )
  }
}

export default App
