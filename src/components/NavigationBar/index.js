import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import {
  Container,
  Nav,
  Navbar,
  Dropdown
} from 'react-bootstrap'
import {
  MdHome,
  MdGroup,
  MdKeyboardArrowDown
} from "react-icons/md"
import './style.scss'

class ProfileMenu extends Component {
  render() {
    const { children, onClick } = this.props

    return (
      <span
        id="menu"
        onClick={onClick}
        className="nav-link mr-sm-2"
      >
        {children}
      </span>
    )
  }
}

const ProfileMenuItem = ({onClick, children}) => (
  <Link to="/profile" onClick={onClick} className="dropdown-item">
    {children}
  </Link>
)

class NavigationBar extends Component {
  render() {
    const { pathname } = this.props.location
    return (
      <Navbar bg="white" variant="light" className="my-navbar">
        <Container>
          <Nav className="mr-auto">
            <Link
              to="/"
              className={classNames(
                "nav-link nav-link__menu",
                { active: pathname === '/' }
              )}
            >
              <MdHome className="mr-sm-1" /> Home
            </Link>
            <Link
              to="/users"
              className={classNames(
                "nav-link nav-link__menu",
                { active: pathname === '/users' }
              )}
            >
              <MdGroup className="mr-sm-1" /> Users
            </Link>
          </Nav>
          <Nav className="ml-auto">
            <Dropdown>
              <Dropdown.Toggle as={ProfileMenu} id="profile-menu">
                Ali Syahidin <MdKeyboardArrowDown />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={ProfileMenuItem}>Profile</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    )
  }
}

export default withRouter(NavigationBar)