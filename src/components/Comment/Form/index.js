import React from 'react'
import classNames from 'classnames'
import { Button, Form, Col } from 'react-bootstrap'

const CommentForm = ({className}) => (
  <Form.Row className={classNames(className, "w-100 m-0")}>
    <Col md={9}>
      <Form.Row className="mb-2">
        <Col>
          <Form.Control type="text" placeholder="Name" />
        </Col>
        <Col>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Row>
      <Form.Control type="text" placeholder="Write comment . . ." />
    </Col>
    <Col className="d-flex align-items-center">
      <Button className="w-100 h-100" variant="outline-primary" type="submit">
        Send
      </Button>
    </Col>
  </Form.Row>
)

export default CommentForm