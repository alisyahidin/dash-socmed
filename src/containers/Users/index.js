import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import Card from '../../components/Card/'
import UserList from '../../components/UserList/'
import './style.css'

const users = [
  {
    name: 'Ali'
  },
  {
    name: 'Ali'
  },
  {
    name: 'Ali'
  },
]

class Users extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <Card align="left">
              {users.map((user, index) => (
                <UserList key={index} {...user} />
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Users
