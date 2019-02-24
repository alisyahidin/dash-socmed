import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'react-avatar'

import Card from '../'
import UserAttribute from './UserAttribute'
import './style.scss'

const Profile = ({user}) => {
  const {address, company, id, name, username, posts, albums, ...attributes} = user
  const {geo, ...listAddress} = address

  return (
    <Card align="left">
      <div className="mx-auto mb-2 d-flex flex-column align-items-center">
        <Avatar round size="70px" name={user.name} className="profile-card__avatar" />
        <h4>{name}</h4>
        <p className="profile-card__username">@{username}</p>
      </div>
      {Object.keys(attributes).map(label => (
        <UserAttribute key={label} label={label} value={attributes[label]} />
      ))}
      <b className="mt-2 mx-auto">Address</b>
      {Object.keys(listAddress).map(label => (
        <UserAttribute key={label} label={label} value={listAddress[label]} />
      ))}
      <b className="mt-2 mx-auto">Company</b>
      {Object.keys(company).map(label => (
        <UserAttribute key={label} label={label} value={company[label]} />
      ))}
    </Card>
  )
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
}

Profile.defaultProps = {
  user: {
    "id": 1,
    "name": "Guest",
    "username": "guest",
    "address": {
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
}

export default Profile