import React from 'react'
import Avatar from 'react-avatar'
import { Button, Form, Col } from 'react-bootstrap'

const CommentForm = () => (
  <Form.Row className="w-100 m-0">
    <Col md={1} className="p-0 d-flex align-items-center justify-content-center">
      <Avatar size="35px" name="Ali Syahidin" round />
    </Col>
    <Col md={9}>
      <Form.Control placeholder="Write comment . . ." />
    </Col>
    <Col className="d-flex align-items-center">
      <Button className="w-100" variant="outline-primary" type="submit">
        Send
      </Button>
    </Col>
  </Form.Row>
)

export default CommentForm