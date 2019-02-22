import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { FaRegComment } from 'react-icons/fa'
import './style.css'

const Post = ({author, title, body, profileDisabled}) => (
  <Row className="post mx-sm-1">
    <Col className="p-sm-0 d-flex flex-column justify-content-center align-items-start">
      <a href="#">
        <h5 className="mb-sm-2">{title}</h5>
      </a>
      <span>
        by&nbsp;-&nbsp;
        <Link to="/profile" className="post__author d-inline-block mb-sm-1">
          <b className="mr-sm-2">
            {author.name}
          </b>
          <span className="author__username mr-sm-2">
            @{author.username}
          </span>
        </Link>
      </span>
      <p className="mb-sm-2">{body}</p>
      <span className="d-flex align-items-center">
        <FaRegComment className="mr-sm-1" /> 5
      </span>
    </Col>
  </Row>
)

Post.propTypes = {
  author: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  profileDisabled: PropTypes.bool.isRequired,
}

Post.defaultProps = {
  author: {
    name: 'Guest',
    username: 'guest'
  },
  title: 'Title',
  body: 'Post',
  profileDisabled: false,
}

export default Post