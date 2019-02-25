import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import classNames from 'classnames'
import { Button, Form } from 'react-bootstrap'

import { login } from '../../actions/auth'
import './style.scss'

class Login extends Component {
  state = {
    username: '',
    email: '',
  }

  handleChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    })
  }

  handleLogin = e => {
    e.preventDefault()
    const { login } = this.props

    login(this.state)
  }

  componentWillUnmount() {
    this.setState({ username: '', email: '' })
  }

  componentDidUpdate() {
    if (this.props.auth.user !== null) {
      this.props.history.push('/')
    }
  }

  render() {
    const { auth } = this.props
    const { username, email } = this.state

    return (
      <div className="login-page">
        <div className="h-75 d-flex flex-column align-items-center justify-content-center">
          <p
            className={classNames(
              "message text-danger mb-3",
              auth.error !== null ? 'message--show' : 'message--hide'
            )}
          >
            {auth.error}
          </p>
          <Form className="text-center w-25 px-5 d-flex flex-column justify-content-center">
            <Form.Group controlId="username">
              <Form.Control
                onChange={this.handleChange}
                name="username"
                value={username}
                type="text"
                placeholder="Username e.g: Bret"
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Control
                onChange={this.handleChange}
                name="email"
                value={email}
                type="email"
                placeholder="Email e.g: Sincere@april.biz"
              />
            </Form.Group>
            <Button
              onClick={this.handleLogin}
              type="submit"
              variant="primary"
              className="mt-sm-2 mx-auto"
              disabled={auth.loading}
            >
              {auth.loading ? 'Loading': 'Login'}
            </Button>
          </Form>
        </div>
        <div className="h-25 text-secondary d-flex align-items-center justify-content-center">
          Copyright &copy; 2019
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    login
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)