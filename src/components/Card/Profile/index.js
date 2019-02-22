import React from 'react'
import PropTypes from 'prop-types'
import Avatar from 'react-avatar'
import Card from '../'
import './style.scss'

const Profile = ({name, username}) => (
  <Card align="center">
    <Avatar round size="70px" name={name} className="profile-card__avatar" />
    <h4>{name}</h4>
    <p className="profile-card__username">@{username}</p>
  </Card>
)

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
}

Profile.defaultProps = {
  name: 'Guest',
  username: 'guest',
}

export default Profile