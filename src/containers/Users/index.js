import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Row, Col } from 'react-bootstrap'

import withNavbar from '../../hoc/withNavbar'
import Card from '../../components/Card/'
import User from '../../components/User/'

import { fetchUser } from '../../actions/user'

class Users extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    const { user } = this.props

    return (
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Card align="left">
              {user.data.map(user => (
                <User key={user.id} id={user.id} {...user} />
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchUser
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withNavbar(Users))