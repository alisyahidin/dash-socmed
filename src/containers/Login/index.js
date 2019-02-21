import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import './style.css'

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div className="h-75 d-flex align-items-center justify-content-center">
          <Form className="text-center w-25 px-5 d-flex flex-column justify-content-center">
            <Form.Group controlId="formPlaintextEmail">
              <Form.Control type="text" placeholder="Username e.g: Bret" />
            </Form.Group>

            <Form.Group controlId="formPlaintextPassword">
              <Form.Control type="email" placeholder="Email e.g: Sincere@april.biz" />
            </Form.Group>

            <Button variant="primary" className="mt-sm-2 mx-auto">
              Login
            </Button>
          </Form>
        </div>
        <div className="h-25 d-flex align-items-center justify-content-center">
          Copyright &copy; {(new Date()).getFullYear()}
        </div>
      </div>
    )
  }
}

export default Login
