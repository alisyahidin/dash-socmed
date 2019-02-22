import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from 'react-avatar'
import { Row, Col } from 'react-bootstrap'
import './style.scss'

const PostDetail = props => (
  <Row className="w-100 m-0 mb-2">
    <Col md={1} className="p-0 d-flex align-items-center justify-content-center">
      <Avatar size="35px" name="Ali Syahidin" round />
    </Col>
    <Col className="p-0 pl-2 d-flex flex-column">
      <Link to="/users/3" className="comment__author">
        @username
      </Link>
      <p className="comment__body">First Comment !!</p>
    </Col>
  </Row>
)

export default PostDetail