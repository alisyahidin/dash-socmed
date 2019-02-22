import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import withNavbar from '../../hoc/withNavbar'
import Card from '../../components/Card/'
import User from '../../components/User/'
import './style.css'

const users = [
  {
    name: 'Guest_1'
  },
  {
    name: 'Guest_2'
  },
  {
    name: 'Guest_3'
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
                <User key={index} id={index+1} {...user} />
              ))}
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withNavbar(Users)
