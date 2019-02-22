import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { FaRegComment } from 'react-icons/fa'

import PostDetail from '../../PostDetail/'
import './style.scss'

const Post = ({author, title, body, profileDisabled}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Row className="post mx-sm-1">
        <Col className="p-sm-0 d-flex flex-column justify-content-center align-items-start">
          <h5 onClick={() => setOpen(true)} className="post__title mb-sm-2">{title}</h5>
          <span>
            by&nbsp;-&nbsp;
            <Link to="/profile" className="author d-inline-block mb-sm-1">
              <b className="mr-sm-1">
                {author.name}
              </b>
              <span className="author__username mr-sm-2">
                @{author.username}
              </span>
            </Link>
          </span>
          <div onClick={() => setOpen(true)} className="post__body">
            <p className="mb-sm-2">{body}</p>
            <span className="d-flex align-items-center">
              <FaRegComment className="mr-sm-1" /> 5
            </span>
          </div>
        </Col>
      </Row>

      <PostDetail
        open={open}
        toggleOpen={setOpen}
      />
    </>
  )
}

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