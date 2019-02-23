import React, { Component } from 'react'
import classNames from 'classnames'
import { Button, Form } from 'react-bootstrap'
import './style.scss'

class Login extends Component {
  render() {
    const { error } = 'Username and Email are wrong!'

    return (
      <div className="login-page">
        <div className="h-75 d-flex flex-column align-items-center justify-content-center">
          <p
            className={classNames(
              "message text-danger mb-3",
              error !== null ? 'message--show' : 'message--hide'
            )}
          >
            {error}
          </p>
          <Form className="text-center w-25 px-5 d-flex flex-column justify-content-center">
            <Form.Group controlId="username">
              <Form.Control
                name="username"
                type="text"
                placeholder="Username e.g: Bret"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control
                name="email"
                type="email"
                placeholder="Email e.g: Sincere@april.biz"
              />
            </Form.Group>
            <Button
              type="button"
              variant="primary"
              className="mt-sm-2 mx-auto"
            >
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