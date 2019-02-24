import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './style.scss'

const PostDetail = ({name, email, body}) => (
  <Row className="comment w-100 m-0 mt-3 mb-2">
    <Col className="p-0 pl-2 d-flex flex-column align-items-start">
      <p className="mb-1">
        <b>{name}</b>&nbsp;
        <span className="comment__email">
          - {email}
        </span>
      </p>
      <p className="comment__body">
        {body}
      </p>
    </Col>
  </Row>
)

export default PostDetail