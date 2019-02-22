import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar'
import { Row, Col } from 'react-bootstrap'
import { FaRegComment } from 'react-icons/fa'
import './style.css'

const Post = ({author, title, body}) => (
  <Row className="post mx-sm-1">
    <Col md={2} className="p-sm-0 d-flex justify-content-center align-items-start">
      <Link to="/profile">
        <Avatar round size="60px" className="mr-sm-2" name={author.name} />
      </Link>
    </Col>
    <Col md={10} className="p-sm-0">
      <Link to="/profile" className="post__author d-inline-block mb-sm-2">
        <b className="mr-sm-2">
          {author.name}
        </b>
        <span className="author__username mr-sm-2">
          @{author.username}
        </span>
      </Link>
      <div className="post__body">
        <div className="mb-sm-2">
          <h5 className="mb-sm-1">{title}</h5>
          <p>{body}</p>
        </div>
        <span className="d-flex align-items-center">
          <FaRegComment className="mr-sm-1" /> 5
        </span>
      </div>
    </Col>
  </Row>
)

Post.propTypes = {
  author: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

Post.defaultProps = {
  author: {
    name: 'Guest',
    username: 'guest'
  },
  title: 'Title',
  body: 'Post',
}

export default Post