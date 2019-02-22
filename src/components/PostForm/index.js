import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import './style.css'

class PostForm extends Component {
  render() {
    return (
      <Form className="text-center w-100 d-flex flex-column justify-content-center">
        <Form.Group controlId="title">
          <Form.Control type="text" placeholder="Title" />
        </Form.Group>
        <Form.Group controlId="body">
          <Form.Control as="textarea" placeholder="Body" />
        </Form.Group>

        <Button variant="primary" className="mt-sm-2 mx-auto">
          Create Post
        </Button>
      </Form>
    )
  }
}

export default PostForm