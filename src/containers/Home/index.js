import React, { Component } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

import withNavbar from '../../hoc/withNavbar'
import Card from '../../components/Card/'
import Profile from '../../components/Card/Profile/'
import Post from '../../components/Card/Post/'
import './style.css'

const posts = [
  {
    userId: 1,
    title: 'Title 1',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus accusantium, eos! Quibusdam molestiae, voluptatem veritatis odit ducimus ratione delectus dolorum placeat et, ea repellendus sit obcaecati sint hic quis qui!'
  },
  {
    userId: 1,
    title: 'Lorem Ipsum',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus accusantium, eos! Quibusdam molestiae, voluptatem veritatis odit ducimus ratione delectus dolorum placeat et, ea repellendus sit obcaecati sint hic quis qui!'
  },
  {
    userId: 1,
    title: 'Learn ReactJS',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus accusantium, eos! Quibusdam molestiae, voluptatem veritatis odit ducimus ratione delectus dolorum placeat et, ea repellendus sit obcaecati sint hic quis qui!'
  },
]

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={3}>
            <Profile name="Ali Syahidin" username="alisyahidin" />
          </Col>
          <Col md={6}>
            <Card>
              {posts.map((data, index) => (
                <Post key={index} {...data} />
              ))}
            </Card>
          </Col>
          <Col md={3}>
            <Card align="center">
              <Form.Control placeholder="Search" />
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default withNavbar(Home)
