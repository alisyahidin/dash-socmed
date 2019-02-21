import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar'
import './style.css'

const UserList = ({name}) =>(
  <Link to="/profile" className="user-list d-flex align-items-center my-sm-2">
    <Avatar className="mr-sm-2" round size="40px" name={name} />
    <h4>{name}</h4>
  </Link>
)

export default UserList
