import React, { Component } from 'react'
import { Row, Col, Form } from 'react-bootstrap'

import Card from '../../components/Card/'
import Profile from '../../components/Card/Profile/'
import Post from '../../components/Card/Post/'
import './style.css'

const posts = [
  {
    userId: 1,
    title: 'sad',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus accusantium, eos! Quibusdam molestiae, voluptatem veritatis odit ducimus ratione delectus dolorum placeat et, ea repellendus sit obcaecati sint hic quis qui!'
  },
  {
    userId: 1,
    title: 'asdlj laksdj',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus accusantium, eos! Quibusdam molestiae, voluptatem veritatis odit ducimus ratione delectus dolorum placeat et, ea repellendus sit obcaecati sint hic quis qui!'
  },
]

class Home extends Component {
  render() {
    return (
      <Row>
        <Col md={3}>
          <Profile name="Ali Syahidin" email="alisyahidin@gmail.com" />
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
    )
  }
}

export default Home
