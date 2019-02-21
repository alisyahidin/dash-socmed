import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import {
  Container,
  Nav,
  Navbar,
  Button
} from 'react-bootstrap'
import {
  MdHome,
  MdGroup,
  MdKeyboardArrowDown
} from "react-icons/md"
import './style.css'

class NavigationBar extends Component {
  render() {
    const { pathname } = this.props.location
    return (
      <Navbar bg="white" variant="light" className="my-navbar">
        <Container>
          <Nav className="mr-auto">
            <Link to="/" className={classNames("nav-link nav-link__menu", { active: pathname === '/' })}>
              <MdHome className="mr-sm-1" /> Home
            </Link>
            <Link to="/users" className={classNames("nav-link nav-link__menu", { active: pathname === '/users' })}>
              <MdGroup className="mr-sm-1" /> Users
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Link to="/profile" className={classNames("nav-link mr-sm-2", { active: pathname === '/profile' })}>
              Ali Syahidin <MdKeyboardArrowDown />
            </Link>
            <Button className="my-btn" variant="primary" size="sm">
              Post
            </Button>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default withRouter(NavigationBar)